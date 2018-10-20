import Data from './rocket-launch-dates.csv';

function processData() {
    //need to read from csv
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        var missions = [];
        if (data.length == headers.length) {

            var col = [];
            for (var j=0; j<headers.length; j++) {
                var launch = {
                    rocket:data[0],
                    agency:data[2],
                    date:data[3],
                    location: data[7],
                    missionDetails:data[10],
                }

                var mission = {
                    missionCode: data[1],
                    coordinates:[data[8],data[9]],
                    remainDays: 0,
                    launchDetails: {launch}
                }

                col.push(headers[j]+":"+data[j]);
                console.log(col);
            }
            lines.push(col);
        }
        missions.push(mission);
    }
}

export default processData;