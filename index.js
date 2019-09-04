function padNumber(number) {

    if(!Number.isInteger(number)) {
        console.debug(padNumber.name + " was called with something other than an integer as an argument???");
        return;
    }

    // Easiest way I could find to do this.
    // Also, the number is always converted to an integer.
    if(number < 10) {
        return "0" + number;
    } else {
        return "" + number;
    }
}

function updateClock() {
    
    let date = new Date(Date.now());
    let clock = document.getElementById("clock");

    clock.textContent =
    padNumber(date.getHours()) + ":" +
    padNumber(date.getMinutes());

}

function updateDate() {

    let date = new Date(Date.now());
    let day = document.getElementById("day");

    let weekDict = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday"
    };

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
    };

    day.textContent = 
    weekDict[date.getDay()] + ", " +
    monthDict[date.getMonth()] + " " +
    date.getDate();

}

// Maybe I'll add a button to choose either DDG or Google. Too lazy to do that now.
function search(engineUrl, text) {

    if(typeof(engineUrl) != typeof("") || typeof(text) != typeof("")) {
        console.debug(search.name + " was called with something other than strings as arguments???");
        return;
    }

    function prepareQuery(str) {
        return "?q=" + str.replace(" ", "+");
    }

    return engineUrl + prepareQuery(text);

}

window.onload = function() {

    let searchField = document.getElementById("search-field");
    // I don't want to get intro trouble for anything, so:
    // I (definitely) DO NOT own the site below.
    let searchEngineUrl = "duckduckgo.com";

    updateClock();
    updateDate();

    searchField.value = "";
    searchField.focus();
    searchField.addEventListener("keydown", function(e) {
        if(e.keyCode == 13) {
            window.open(search("https://" + searchEngineUrl, searchField.value), "_self");
        }
    });

    setInterval(updateClock, 1000);
    setInterval(updateDate, 1000 * 60);

}