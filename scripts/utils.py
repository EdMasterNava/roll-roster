import datetime
import json 

def convert_date_string_to_obj(date_string):
    format = '%b %d %Y'  # The date string format i.e. 05 15 2014
    datetime_obj = datetime.datetime.strptime(date_string, format)
 
    return datetime_obj

def convert_date_string_to_obj_2(date_string):
    format = '%B %d, %Y'  # The date string format i.e. May 15, 2014
    datetime_obj = datetime.datetime.strptime(date_string, format)
 
    return datetime_obj

def save_events_to_json(all_event_info, saved_to):
    """ Save IBJJF event details to json."""
    with open(saved_to, 'w+') as jout:   
        json.dump(all_event_info, jout, default=str)
    print("Yay! Scraped events are saved to {}!".format(saved_to))