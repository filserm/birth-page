const [years, months, days] = dateDiff('2022-10-15')
console.log("years", years, "months", months, "days", days)
var today = new Date();
var current_day = new Date();

const birthday = moment.tz("2022-10-15 15:20:00", "Europe/Berlin");
current_day = moment.tz(current_day, 'DD/MM/YYYY HH:mm:ss', 'Europe/Berlin');
const diff = birthday.diff(current_day);
console.log(birthday, current_day)
const diffDuration = moment.duration(diff)

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
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
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