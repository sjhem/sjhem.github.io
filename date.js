var today = new Date();
var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + ' ' + time;

document.getElementById("dateTime").innerHTML = dateTime;