from bs4 import BeautifulSoup
from datetime import datetime
import json
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from webdriver_manager.chrome import ChromeDriverManager

from utils import convert_date_string_to_obj_2, save_events_to_json

_EVENT_HOST_NAME = "SIJJF"
_TODAY_STRING = datetime.now().strftime("%Y%m%d")

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
options.add_argument('--headless')
driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver", options=options)

def parse_events_date(raw_date_string):
    """Parse SIJJF date string"""
    # There are 2 types of date string. One with -, meaning the start date != end date. Another is without -, meaning start date = end date.
    raw_date_list = raw_date_string.split('-')
    if len(raw_date_list) > 1:                                              # start date != end date
        event_start_string = raw_date_list[0].strip()
        event_month_string = event_start_string.split(' ')[0]
        event_start_day_string = event_start_string.split(' ')[1]
        event_end_string = raw_date_list[1].strip()
        event_end_day_string = event_end_string.split(',')[0]
        event_year_string = event_end_string.split(',')[1]
        event_start_date = convert_date_string_to_obj_2(event_month_string + ' ' + event_start_day_string + ', ' + event_year_string)
        event_end_date = convert_date_string_to_obj_2(event_month_string + ' ' + event_end_day_string + ', ' + event_year_string)
    else:                                                                   # start date == end date
        event_start_date = convert_date_string_to_obj_2(raw_date_string)
        event_end_date = event_start_date
    return event_start_date, event_end_date


def extract_event_per_page(event_selectors, events, event_cnt):
    for i, event_selector in enumerate(event_selectors):
        # i. Extract event date
        event_date = event_selector.find_all('td')[2].get_text().strip()                     # 3rd column, stripped all the space of the date string
        event_start_date, event_end_date = parse_events_date(event_date)
        # ii. Extract event name
        event_name = event_selector.find_all('td')[1].get_text().strip()                     # 2nd column
        # iii. Extract event location
        event_location = event_selector.find_all('td')[3].get_text()                         # 4th column
        # iv. Extract event link
        event_link = event_selector.find_all('td')[1].find('a', attrs={'href': re.compile("^https://")}).get('href') 
        # v. Extract federation
        event_federation = event_selector.find_all('td')[0].get_text().strip()               # 1st column
        events.append({"event_id": event_cnt,
                    "event_host": event_federation,
                    "event_name": event_name, 
                    "event_start_date": event_start_date,
                    "event_end_date": event_end_date,
                    "event_venue":event_location,
                    "event_link": event_link
                    })
        event_cnt += 1
    return events, event_cnt

def refresh_page_source(driver):
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'lxml')
    return soup

# 1. Access ADCC championship page and click to display all events using selenium
driver.get("https://sjjif.com/calendar")

# 2. Extract events using Beautiful Soup 
page_buttons = driver.find_elements(By.CLASS_NAME, "paginate_active")
next_page_button = driver.find_element(By.CLASS_NAME, "next")
events = []
event_cnt = 0
page_source = driver.page_source
soup = BeautifulSoup(page_source, 'lxml')
event_selectors = soup.find('tbody').find_all('tr')
events, event_cnt = extract_event_per_page(event_selectors, events, event_cnt) # extract event details in the original page
# Click "Next Page" & refresh the page source until there is no more page buttons
for x in range(len(page_buttons)):
    if page_buttons[x].is_displayed():
        driver.execute_script("arguments[0].click();", page_buttons[x])
        time.sleep(1)
        soup = refresh_page_source(driver)  # refresh page source
        event_selectors = soup.find('tbody').find_all('tr')
        events, event_cnt = extract_event_per_page(event_selectors, events, event_cnt) # extract event details in the next page

# 3. Output event dictionary to JSON file
save_events_to_json(events, 'results/result_events_{}_{}.json'.format(_EVENT_HOST_NAME, _TODAY_STRING))