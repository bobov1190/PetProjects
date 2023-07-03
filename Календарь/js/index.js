const lang = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang,{weekday: 'long'});
let monthName = date.toLocaleString(lang,{month: 'long'});
let year = date.getFullYear();

document.querySelector('.monthName').innerHTML = monthName;
document.querySelector('.dayName').innerHTML = dayName;
document.querySelector('.dayNumber').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = year;