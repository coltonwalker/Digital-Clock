$(document).ready(function () {
    function displayAll() {
        var currentTime = new Date();
        var week = currentTime.getUTCDay()
        if (week === 1) day = "Monday";
        else if (week === 2) week = "Tuesday";
        else if (week === 3) week = "Wednesday";
        else if (week === 4) week = "Thursday";
        else if (week === 5) week = "Friday";
        else if (week === 6) week = "Saturday";
        else if (week === 0) week = "Sunday";
        
        var year = currentTime.getFullYear();
        
        var month = currentTime.getUTCMonth();
        if (month === 11) month = "Dec";
        else if (month === 10) month = "Nov";
        else if (month === 9) month = "Oct";
        else if (month === 8) month = "Sep";
        else if (month === 7) month = "Aug";
        else if (month === 6) month = "Jul";
        else if (month === 5) month = "Jun";
        else if (month === 4) month = "May";
        else if (month === 3) month = "Apr";
        else if (month === 2) month = "Mar";
        else if (month === 1) month = "Feb";
        else if (month === 0) month = "Jan";
        
        var today = currentTime.getDate()
        if (date < 31) {
            date = "1";
        }
            
        var hours = currentTime.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var seconds = currentTime.getSeconds();
        var meridiem = "AM";
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        if (hours === 0) {
            hours = 12;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var weekDiv = document.getElementById('week')
        weekDiv.innerHTML = week;
        var dateDiv = document.getElementById('date')
        dateDiv.innerHTML = month + " " + today + " " + year;
        var clockDiv = document.getElementById('clock');
        clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
        
    }
    displayAll();
    setInterval(displayAll, 1000);
});