import json
import pathlib

event_json_files = list(pathlib.Path('./results').glob('*.json'))

def merge_JsonFiles(filename, output_json):
    result = list()
    event_cnt = 0 
    for f in filename:
        with open(f, 'r') as infile:
            events = json.load(infile)
            for e in events:
                e['event_id'] = event_cnt # re-order the event id
                event_cnt += 1
            result.extend(events)

    with open(output_json, 'w') as output_file:
        json.dump(result, output_file)

if __name__ == "__main__":
    merge_JsonFiles(event_json_files, output_json="./all_result_events.json")



 