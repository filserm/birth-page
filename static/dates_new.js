var [years, months, days] = dateDiff('2022-10-15')
console.log("years", years, "months", months, "days", days)
var today = new Date();
var current_day = new Date();

// function weeksBetween(d1, d2) {
//     return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
// }
// let weeks = weeksBetween(new Date(2022, 10, 15), new Date());

const birthday = moment.tz("2022-10-15 14:21:00", "Europe/Berlin");
current_day = moment.tz(current_day, 'DD/MM/YYYY HH:mm:ss', 'Europe/Berlin');


weeks=current_day.diff(birthday, 'week');
month=current_day.diff(birthday, 'month');
console.log("wochen: ", weeks)
console.log("monate: ", months)

const diff = birthday.diff(current_day);
console.log(birthday, current_day)
const diffDuration = moment.duration(diff)

var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();
//console.log("stunde: ", hour, "minutes: ", minutes)
// if( hour <= 13 && days > 0 ){
//     days = days - 1
// }
// if( hour == 14 && minutes <= 21 && days > 0 ){
//     days = days - 1
// }

let hours = diffDuration.hours() * (-1)
minutes = diffDuration.minutes() * (-1)
seconds = diffDuration.seconds() * (-1)
console.log("Hours:", hours)
console.log("Minutes:", minutes)
console.log("Seconds:", seconds)



function insertVars() {
    document.getElementById('years').innerHTML = years
    document.getElementById('months').innerHTML = months
    document.getElementById('days').innerHTML = days
    
    //document.getElementById('hours').innerHTML = hours
    //document.getElementById('minutes').innerHTML = minutes
    //document.getElementById('seconds').innerHTML = seconds

    document.getElementById('weeks').innerHTML = weeks
    document.getElementById('month').innerHTML = month

}



function dateDiff(date) {
    date = date.split('-');
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var yy = parseInt(date[0]);
    var mm = parseInt(date[1]);
    var dd = parseInt(date[2]);
    var years, months, days;
    // months
    months = month - mm;
    if (day < dd) {
        months = months - 1;
    }
    // years
    years = year - yy;
    if (month * 100 + day < mm * 100 + dd) {
        years = years - 1;
        months = months + 12;
    }
    // days
    days = Math.floor((today.getTime() - (new Date(yy + years, mm + months - 1, dd)).getTime()) / (24 * 60 * 60 * 1000));
    //
    //return { years: years, months: months, days: days };
    return [years, months, days]
}