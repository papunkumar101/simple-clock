function updateClock(date) {
    if(typeof(date) != typeof(new Date())) {
        console.debug(updateClock.name + " was called without a Date???");
        return;
    }

    let clock = document.getElementById("clock");
    clock.textContent = date.getHours() + ":" + date.getMinutes();

}

function updateDate(date) {
    if(typeof(date) != typeof(new Date())) {
        console.debug(updateDate.name + " was called without a Date???");
        return;
    }

    let weekDict = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday"
    }

    let monthDict = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    let day = document.getElementById("day");

    day.textContent = 
    weekDict[date.getDay()] + ", " +
    monthDict[date.getMonth()] + " " +
    date.getDate();


}

window.onload = function() {
    let date = new Date(Date.now());
    updateClock(date);
    updateDate(date);

    setInterval(updateClock, 500, date);
    setInterval(updateDate, 1000 * 60, date);
}