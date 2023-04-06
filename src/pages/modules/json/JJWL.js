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
    const [_, year, month, day] = dateString.match(regex);
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toJSON();
}

const json = [
    {
        "event_id": 0,
        "event_host": "IBJJF",
        "event_name": "Rio Summer International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-01-14 00:00:00",
        "event_end_date": "2023-01-15 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena Cel Wenceslau Malta, Rio de Janeiro",
        "event_link": ""
    },
    {
        "event_id": 1,
        "event_host": "IBJJF",
        "event_name": "Rio Summer International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-01-14 00:00:00",
        "event_end_date": "2023-01-15 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena Cel Wenceslau Malta, Rio de Janeiro",
        "event_link": ""
    },
    {
        "event_id": 2,
        "event_host": "IBJJF",
        "event_name": "European IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-01-23 00:00:00",
        "event_end_date": "2023-01-29 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "INSTITUT DU JUDO (IJ), Paris",
        "event_link": ""
    },
    {
        "event_id": 3,
        "event_host": "IBJJF",
        "event_name": "Austin Winter International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-01-29 00:00:00",
        "event_end_date": "2023-01-29 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Round Rock Sports Center, Round Rock",
        "event_link": ""
    },
    {
        "event_id": 4,
        "event_host": "IBJJF",
        "event_name": "Austin Winter International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-01-29 00:00:00",
        "event_end_date": "2023-01-29 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Round Rock Sports Center, Round Rock",
        "event_link": ""
    },
    {
        "event_id": 5,
        "event_host": "IBJJF",
        "event_name": "Oklahoma City International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-02-04 00:00:00",
        "event_end_date": "2023-02-05 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Southern Nazarene University, Bethany",
        "event_link": ""
    },
    {
        "event_id": 6,
        "event_host": "IBJJF",
        "event_name": "Oklahoma City International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-02-04 00:00:00",
        "event_end_date": "2023-02-05 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Southern Nazarene University, Bethany",
        "event_link": ""
    },
    {
        "event_id": 7,
        "event_host": "IBJJF",
        "event_name": "Atlanta Winter International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-02-11 00:00:00",
        "event_end_date": "2023-02-11 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Georgia International Convention Center, College Park",
        "event_link": ""
    },
    {
        "event_id": 8,
        "event_host": "IBJJF",
        "event_name": "London International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-02-18 00:00:00",
        "event_end_date": "2023-02-19 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Crystal Palace National Sports Centre, London",
        "event_link": ""
    },
    {
        "event_id": 9,
        "event_host": "IBJJF",
        "event_name": "London International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-02-18 00:00:00",
        "event_end_date": "2023-02-19 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Crystal Palace National Sports Centre, London",
        "event_link": ""
    },
    {
        "event_id": 10,
        "event_host": "IBJJF",
        "event_name": "Memphis International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-02-18 00:00:00",
        "event_end_date": "2023-02-18 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Renasant Convention Center, Memphis",
        "event_link": ""
    },
    {
        "event_id": 11,
        "event_host": "IBJJF",
        "event_name": "Memphis International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-02-18 00:00:00",
        "event_end_date": "2023-02-18 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Renasant Convention Center, Memphis",
        "event_link": ""
    },
    {
        "event_id": 12,
        "event_host": "IBJJF",
        "event_name": "Tampa International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-02-25 00:00:00",
        "event_end_date": "2023-02-26 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Wiregrass Ranch Sports Campus, Wesley Chapel",
        "event_link": ""
    },
    {
        "event_id": 13,
        "event_host": "IBJJF",
        "event_name": "Tampa International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-02-25 00:00:00",
        "event_end_date": "2023-02-26 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Wiregrass Ranch Sports Campus, Wesley Chapel",
        "event_link": ""
    },
    {
        "event_id": 14,
        "event_host": "IBJJF",
        "event_name": "Tezos FloGrappling IBJJF Grand Prix",
        "event_start_date": "2023-03-03 00:00:00",
        "event_end_date": "2023-03-03 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "-, Austin",
        "event_link": ""
    },
    {
        "event_id": 15,
        "event_host": "IBJJF",
        "event_name": "Dallas International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-03-04 00:00:00",
        "event_end_date": "2023-03-05 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "NYTEX Sports Centre, North Richland Hills",
        "event_link": ""
    },
    {
        "event_id": 16,
        "event_host": "IBJJF",
        "event_name": "Dallas International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-03-04 00:00:00",
        "event_end_date": "2023-03-05 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "NYTEX Sports Centre, 8851 Ice House Dr",
        "event_link": ""
    },
    {
        "event_id": 17,
        "event_host": "IBJJF",
        "event_name": "Los Angeles International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-03-11 00:00:00",
        "event_end_date": "2023-03-12 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Felix Event Center, Azusa",
        "event_link": ""
    },
    {
        "event_id": 18,
        "event_host": "IBJJF",
        "event_name": "Los Angeles International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-03-11 00:00:00",
        "event_end_date": "2023-03-12 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Felix Event Center, Azusa",
        "event_link": ""
    },
    {
        "event_id": 19,
        "event_host": "IBJJF",
        "event_name": "Curitiba Summer International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-03-11 00:00:00",
        "event_end_date": "2023-03-12 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio do Tarum\u00e3, Curitiba",
        "event_link": ""
    },
    {
        "event_id": 20,
        "event_host": "IBJJF",
        "event_name": "Curitiba Summer International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-03-11 00:00:00",
        "event_end_date": "2023-03-12 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio do Tarum\u00e3, Curitiba",
        "event_link": ""
    },
    {
        "event_id": 21,
        "event_host": "IBJJF",
        "event_name": "Los Angeles Kids International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-03-12 00:00:00",
        "event_end_date": "2023-03-12 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Felix Event Center, Azusa",
        "event_link": ""
    },
    {
        "event_id": 22,
        "event_host": "IBJJF",
        "event_name": "Pan IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-03-22 00:00:00",
        "event_end_date": "2023-03-26 00:00:00",
        "is_event_start_date_estimated": true,
        "is_event_end_date_estimated": false,
        "event_venue": "Osceola Heritage Park, Kissimmee",
        "event_link": ""
    },
    {
        "event_id": 23,
        "event_host": "IBJJF",
        "event_name": "Dublin International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-01 00:00:00",
        "event_end_date": "2023-04-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Sport Ireland National Indoor Arena, Dublin",
        "event_link": ""
    },
    {
        "event_id": 24,
        "event_host": "IBJJF",
        "event_name": "Dublin International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-01 00:00:00",
        "event_end_date": "2023-04-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Sport Ireland National Indoor Arena, Dublin",
        "event_link": ""
    },
    {
        "event_id": 25,
        "event_host": "IBJJF",
        "event_name": "Dublin Kids International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-01 00:00:00",
        "event_end_date": "2023-04-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Sport Ireland National Indoor Arena, Dublin",
        "event_link": ""
    },
    {
        "event_id": 26,
        "event_host": "IBJJF",
        "event_name": "Rio Fall International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-01 00:00:00",
        "event_end_date": "2023-04-02 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena Cel Wenceslau Malta - Parque Ol\u00edmpico da Vila Militar, Rio de Janeiro",
        "event_link": ""
    },
    {
        "event_id": 27,
        "event_host": "IBJJF",
        "event_name": "Rio Fall International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-01 00:00:00",
        "event_end_date": "2023-04-02 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena Cel Wenceslau Malta - Parque Ol\u00edmpico da Vila Militar, Rio de Janeiro",
        "event_link": ""
    },
    {
        "event_id": 28,
        "event_host": "IBJJF",
        "event_name": "Sydney International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-02 00:00:00",
        "event_end_date": "2023-04-02 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "University Sports & Aquatic Centre (Bldg. G09), Darlington",
        "event_link": ""
    },
    {
        "event_id": 29,
        "event_host": "IBJJF",
        "event_name": "Sydney International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-02 00:00:00",
        "event_end_date": "2023-04-02 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "University Sports & Aquatic Centre (Bldg. G09), Darlington",
        "event_link": ""
    },
    {
        "event_id": 30,
        "event_host": "IBJJF",
        "event_name": "Charleston International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-15 00:00:00",
        "event_end_date": "2023-04-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Charleston Area Convention Center - Hall C, North Charleston",
        "event_link": ""
    },
    {
        "event_id": 31,
        "event_host": "IBJJF",
        "event_name": "Charleston International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-15 00:00:00",
        "event_end_date": "2023-04-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Charleston Area Convention Center - Hall C, North Charleston",
        "event_link": ""
    },
    {
        "event_id": 32,
        "event_host": "IBJJF",
        "event_name": "Salvador Fall International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-15 00:00:00",
        "event_end_date": "2023-04-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena de Esportes da Bahia, Lauro de Freitas",
        "event_link": ""
    },
    {
        "event_id": 33,
        "event_host": "IBJJF",
        "event_name": "Salvador Fall International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-15 00:00:00",
        "event_end_date": "2023-04-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena de Esportes da Bahia, Lauro de Freitas",
        "event_link": ""
    },
    {
        "event_id": 34,
        "event_host": "IBJJF",
        "event_name": "Nashville Spring International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-22 00:00:00",
        "event_end_date": "2023-04-23 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Williamson County AG Expo Park, Franklin",
        "event_link": ""
    },
    {
        "event_id": 35,
        "event_host": "IBJJF",
        "event_name": "Nashville Spring International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-22 00:00:00",
        "event_end_date": "2023-04-23 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Williamson County AG Expo Park, Franklin",
        "event_link": ""
    },
    {
        "event_id": 36,
        "event_host": "IBJJF",
        "event_name": "Santa Cruz International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-22 00:00:00",
        "event_end_date": "2023-04-23 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Kaiser Permanente Arena, Santa Cruz",
        "event_link": ""
    },
    {
        "event_id": 37,
        "event_host": "IBJJF",
        "event_name": "Santa Cruz International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-22 00:00:00",
        "event_end_date": "2023-04-23 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Kaiser Permanente Arena, Santa Cruz",
        "event_link": ""
    },
    {
        "event_id": 38,
        "event_host": "IBJJF",
        "event_name": "Campeonato Brasileiro de Jiu-Jitsu (idade 04 a 15 anos) 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-04-30 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio Poliesportivo Jos\u00e9 Correa, Barueri",
        "event_link": ""
    },
    {
        "event_id": 39,
        "event_host": "IBJJF",
        "event_name": "Campeonato Brasileiro de Jiu-Jitsu (Juvenil, Adulto e Master) 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-05-07 00:00:00",
        "is_event_start_date_estimated": true,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio Poliesportivo Jos\u00e9 Correa, Barueri",
        "event_link": ""
    },
    {
        "event_id": 40,
        "event_host": "IBJJF",
        "event_name": "Master International Jiu-Jitsu Championship - Europe 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-04-30 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Centre Esportiu Municipal Olimpics Vall d'Hebron, Barcelona",
        "event_link": ""
    },
    {
        "event_id": 41,
        "event_host": "IBJJF",
        "event_name": "Miami International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-04-30 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Miami-Dade County Youth Fairgrounds - Fuchs Pavilion, Miami",
        "event_link": ""
    },
    {
        "event_id": 42,
        "event_host": "IBJJF",
        "event_name": "Miami International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-04-30 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Miami-Dade County Youth Fairgrounds - Fuchs Pavilion, Miami",
        "event_link": ""
    },
    {
        "event_id": 43,
        "event_host": "IBJJF",
        "event_name": "Chicago Spring International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-04-30 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Chicago State University - Emil & Patricia A. Jones Convocation Center, Chicago",
        "event_link": ""
    },
    {
        "event_id": 44,
        "event_host": "IBJJF",
        "event_name": "Chicago Spring International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-04-29 00:00:00",
        "event_end_date": "2023-04-30 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Chicago State University - Emil & Patricia A. Jones Convocation Center, Chicago",
        "event_link": ""
    },
    {
        "event_id": 45,
        "event_host": "IBJJF",
        "event_name": "Atlanta Spring International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-06 00:00:00",
        "event_end_date": "2023-05-07 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Georgia International Convention Center, College Park",
        "event_link": ""
    },
    {
        "event_id": 46,
        "event_host": "IBJJF",
        "event_name": "Atlanta Spring International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-06 00:00:00",
        "event_end_date": "2023-05-07 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Georgia International Convention Center, College Park",
        "event_link": ""
    },
    {
        "event_id": 47,
        "event_host": "IBJJF",
        "event_name": "Denver International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-06 00:00:00",
        "event_end_date": "2023-05-07 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Regis University, Denver",
        "event_link": ""
    },
    {
        "event_id": 48,
        "event_host": "IBJJF",
        "event_name": "Denver International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-06 00:00:00",
        "event_end_date": "2023-05-07 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Regis University, Denver",
        "event_link": ""
    },
    {
        "event_id": 49,
        "event_host": "IBJJF",
        "event_name": "Atlanta Spring Kids International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-07 00:00:00",
        "event_end_date": "2023-05-07 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Georgia International Convention Center, College Park",
        "event_link": ""
    },
    {
        "event_id": 50,
        "event_host": "IBJJF",
        "event_name": "Houston International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-13 00:00:00",
        "event_end_date": "2023-05-14 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "1 NRG Park, Houston",
        "event_link": ""
    },
    {
        "event_id": 51,
        "event_host": "IBJJF",
        "event_name": "Houston International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-13 00:00:00",
        "event_end_date": "2023-05-14 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "1 NRG Park, Houston",
        "event_link": ""
    },
    {
        "event_id": 52,
        "event_host": "IBJJF",
        "event_name": "Paris Spring International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-13 00:00:00",
        "event_end_date": "2023-05-14 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Salle Charpy - Stade Charl\u00e9ty, Paris",
        "event_link": ""
    },
    {
        "event_id": 53,
        "event_host": "IBJJF",
        "event_name": "Paris Spring International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-13 00:00:00",
        "event_end_date": "2023-05-14 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Salle Charpy - Stade Charl\u00e9ty, Paris",
        "event_link": ""
    },
    {
        "event_id": 54,
        "event_host": "IBJJF",
        "event_name": "San Diego Spring International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-20 00:00:00",
        "event_end_date": "2023-05-21 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Harry West Gymnasium, San Diego",
        "event_link": ""
    },
    {
        "event_id": 55,
        "event_host": "IBJJF",
        "event_name": "San Diego Spring International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-20 00:00:00",
        "event_end_date": "2023-05-21 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Harry West Gymnasium, San Diego",
        "event_link": ""
    },
    {
        "event_id": 56,
        "event_host": "IBJJF",
        "event_name": "Baton Rouge International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-20 00:00:00",
        "event_end_date": "2023-05-21 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Team Sportsplex, Baton Rouge",
        "event_link": ""
    },
    {
        "event_id": 57,
        "event_host": "IBJJF",
        "event_name": "Baton Rouge International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-20 00:00:00",
        "event_end_date": "2023-05-21 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Team Sportsplex, Baton Rouge",
        "event_link": ""
    },
    {
        "event_id": 58,
        "event_host": "IBJJF",
        "event_name": "Floripa Fall International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-05-20 00:00:00",
        "event_end_date": "2023-05-21 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Complexo Esportivo Rozendo V. Lima-IEE, Florian\u00f3polis",
        "event_link": ""
    },
    {
        "event_id": 59,
        "event_host": "IBJJF",
        "event_name": "Floripa Fall International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-05-20 00:00:00",
        "event_end_date": "2023-05-21 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Complexo Esportivo Rozendo V. Lima-IEE, Florian\u00f3polis",
        "event_link": ""
    },
    {
        "event_id": 60,
        "event_host": "IBJJF",
        "event_name": "Master International Jiu-Jitsu Championship - North America 2023",
        "event_start_date": "2023-05-31 00:00:00",
        "event_end_date": "2023-06-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "The Walter Pyramid (CSULB), Long Beach",
        "event_link": ""
    },
    {
        "event_id": 61,
        "event_host": "IBJJF",
        "event_name": "World IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-06-01 00:00:00",
        "event_end_date": "2023-06-04 00:00:00",
        "is_event_start_date_estimated": true,
        "is_event_end_date_estimated": false,
        "event_venue": "The Walter Pyramid (CSULB), Long Beach",
        "event_link": ""
    },
    {
        "event_id": 62,
        "event_host": "IBJJF",
        "event_name": "Rio International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-06-17 00:00:00",
        "event_end_date": "2023-06-18 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena Cel. Wenceslau Malta, Rio de Janeiro",
        "event_link": ""
    },
    {
        "event_id": 63,
        "event_host": "IBJJF",
        "event_name": "Rio International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-06-17 00:00:00",
        "event_end_date": "2023-06-18 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Arena Cel. Wenceslau Malta, Rio de Janeiro",
        "event_link": ""
    },
    {
        "event_id": 64,
        "event_host": "IBJJF",
        "event_name": "Fortaleza International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-06-24 00:00:00",
        "event_end_date": "2023-06-25 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio Paulo Sarasate, Fortaleza",
        "event_link": ""
    },
    {
        "event_id": 65,
        "event_host": "IBJJF",
        "event_name": "Fortaleza International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-06-24 00:00:00",
        "event_end_date": "2023-06-25 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio Paulo Sarasate, Fortaleza",
        "event_link": ""
    },
    {
        "event_id": 66,
        "event_host": "IBJJF",
        "event_name": "Asian Jiu-Jitsu IBJJF Championship 2023",
        "event_start_date": "2023-07-07 00:00:00",
        "event_end_date": "2023-07-09 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Aichi-ken Budokan, Nagoya",
        "event_link": ""
    },
    {
        "event_id": 67,
        "event_host": "IBJJF",
        "event_name": "Austin Summer International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-07-15 00:00:00",
        "event_end_date": "2023-07-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Round Rock Sports Center, Round Rock",
        "event_link": ""
    },
    {
        "event_id": 68,
        "event_host": "IBJJF",
        "event_name": "Austin Summer International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-07-15 00:00:00",
        "event_end_date": "2023-07-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Round Rock Sports Center, Round Rock",
        "event_link": ""
    },
    {
        "event_id": 69,
        "event_host": "IBJJF",
        "event_name": "Austin Summer Kids International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-07-16 00:00:00",
        "event_end_date": "2023-07-16 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Round Rock Sports Center, Round Rock",
        "event_link": ""
    },
    {
        "event_id": 70,
        "event_host": "IBJJF",
        "event_name": "Orlando Summer International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-07-19 00:00:00",
        "event_end_date": "2023-07-21 00:00:00",
        "is_event_start_date_estimated": true,
        "is_event_end_date_estimated": false,
        "event_venue": "Osceola Heritage Park, Kissimmee",
        "event_link": ""
    },
    {
        "event_id": 71,
        "event_host": "IBJJF",
        "event_name": "Orlando Summer International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-07-19 00:00:00",
        "event_end_date": "2023-07-21 00:00:00",
        "is_event_start_date_estimated": true,
        "is_event_end_date_estimated": false,
        "event_venue": "Osceola Heritage Park, Kissimmee",
        "event_link": ""
    },
    {
        "event_id": 72,
        "event_host": "IBJJF",
        "event_name": "Pan Kids IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-07-21 00:00:00",
        "event_end_date": "2023-07-23 00:00:00",
        "is_event_start_date_estimated": true,
        "is_event_end_date_estimated": false,
        "event_venue": "Osceola Heritage Park, Kissimmee",
        "event_link": ""
    },
    {
        "event_id": 73,
        "event_host": "IBJJF",
        "event_name": "Vit\u00f3ria International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-08-05 00:00:00",
        "event_end_date": "2023-08-06 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio Tancred\u00e3o, Vit\u00f3ria",
        "event_link": ""
    },
    {
        "event_id": 74,
        "event_host": "IBJJF",
        "event_name": "Vit\u00f3ria International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-08-05 00:00:00",
        "event_end_date": "2023-08-06 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Gin\u00e1sio Tancred\u00e3o, Vit\u00f3ria",
        "event_link": ""
    },
    {
        "event_id": 75,
        "event_host": "IBJJF",
        "event_name": "World Master IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-08-31 00:00:00",
        "event_end_date": "2023-09-02 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Las Vegas Convention Center - Hall N3/N4, Las Vegas",
        "event_link": ""
    },
    {
        "event_id": 76,
        "event_host": "IBJJF",
        "event_name": "Jiu-Jitsu CON International 2023",
        "event_start_date": "2023-08-31 00:00:00",
        "event_end_date": "2023-09-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Las Vegas Convention Center - Hall N3/N4, Las Vegas",
        "event_link": ""
    },
    {
        "event_id": 77,
        "event_host": "IBJJF",
        "event_name": "Jiu-Jitsu CON No-Gi International 2023",
        "event_start_date": "2023-08-31 00:00:00",
        "event_end_date": "2023-09-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Las Vegas Convention Center - Hall N3/N4, Las Vegas",
        "event_link": ""
    },
    {
        "event_id": 78,
        "event_host": "IBJJF",
        "event_name": "Jiu-Jitsu CON Novice International 2023",
        "event_start_date": "2023-08-31 00:00:00",
        "event_end_date": "2023-09-01 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Las Vegas Convention Center - Hall N3/N4, Las Vegas",
        "event_link": ""
    },
    {
        "event_id": 79,
        "event_host": "IBJJF",
        "event_name": "Jiu-Jitsu CON Kids International 2023",
        "event_start_date": "2023-09-02 00:00:00",
        "event_end_date": "2023-09-02 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Las Vegas Convention Center - Hall N3/N4, Las Vegas",
        "event_link": ""
    },
    {
        "event_id": 80,
        "event_host": "IBJJF",
        "event_name": "Dublin Fall International Open IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-12-02 00:00:00",
        "event_end_date": "2023-12-03 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Sport Ireland National Indoor Arena, Dublin 15",
        "event_link": ""
    },
    {
        "event_id": 81,
        "event_host": "IBJJF",
        "event_name": "Dublin Fall International Open IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-12-02 00:00:00",
        "event_end_date": "2023-12-03 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Sport Ireland National Indoor Arena, Dublin 15",
        "event_link": ""
    },
    {
        "event_id": 82,
        "event_host": "IBJJF",
        "event_name": "European Kids IBJJF Jiu-Jitsu Championship 2023",
        "event_start_date": "2023-12-02 00:00:00",
        "event_end_date": "2023-12-03 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": true,
        "event_venue": "Sport Ireland National Indoor Arena, Dublin 15",
        "event_link": ""
    },
    {
        "event_id": 83,
        "event_host": "IBJJF",
        "event_name": "World IBJJF Jiu-Jitsu No-Gi Championship 2023",
        "event_start_date": "2023-12-07 00:00:00",
        "event_end_date": "2023-12-09 00:00:00",
        "is_event_start_date_estimated": false,
        "is_event_end_date_estimated": false,
        "event_venue": "Las Vegas Convention Center - Hall N4, Las Vegas",
        "event_link": ""
    }
];

export const jjwlJSON = switchDate(json);

export default { jjwlJSON };