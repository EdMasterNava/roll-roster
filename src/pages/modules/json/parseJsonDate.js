function switchDate(array){
    const newArray = [];
    array.forEach(obj => {
        const newObj = {...obj};
        const start = obj["event_start_date"];
        const end = obj["event_end_date"];
        newObj["event_start_date"] = convertDate(start);
        newObj["event_end_date"] = convertDate(end);
        newArray.push(newObj);
    })
    return newArray;
}
function convertDate(string){
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const dateString = string;
    const [/* Unused variable placeholder */ , year, month, day] = dateString.match(regex);
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toJSON();
}

var json = JSON.parse(fs.readFileSync(scripts/all_result_events.json));     //read merged event json file into json obj

export default switchDate(json);