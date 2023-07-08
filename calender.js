
//setting some variables

var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var presentDate = new Date().getDate()
var presentMonth = new Date().getMonth()
var presentYear = new Date().getFullYear()


// function to find starting day of month

function findDaycode(month, year) {
    month = month + 1
    if (month == 1) {
        month = 13;
        year--;
    }
    if (month == 2) {
        month = 14;
        year--;
    }
    let q = 1;
    let m = month;
    let k = year % 100;
    let j = parseInt(year / 100, 10);
    let h = q + parseInt(13 * (m + 1) / 5, 10) + k + parseInt(k / 4, 10) + parseInt(j / 4, 10) + 5 * j;
    h = h % 7;
    if (h === 0) {
        h = 7
    }
    return h;
}

// function to display month

function displayMonth(months,years) {
    document.querySelector("#year-month").innerHTML = years+"  "+monthArr[months]
    let daycode = findDaycode(months, years)
    for (let j = 0; j < daycode-1; j++) {
        document.querySelector(".date-container").innerHTML += "<p> </p>";
    }
    for (let i = 1; i <= monthDays[months]; i++) {
        document.querySelector(".date-container").innerHTML += `<p>${i}</p>`;
    }
}

//Adding events

document.querySelector("#next").addEventListener("click",function () {
    document.querySelector("#year-month").innerHTML = ''
    document.querySelector(".date-container").innerHTML = ''
    presentMonth++
    if (presentMonth === 12) {
        presentMonth = 0
        presentYear++
    }
    displayMonth(presentMonth,presentYear)
})

document.querySelector("#prev").addEventListener("click",function () {
    document.querySelector("#year-month").innerHTML = ''
    document.querySelector(".date-container").innerHTML = ''
    presentMonth--
    if (presentMonth === -1) {
        presentMonth = 11
        presentYear--
    }
    displayMonth(presentMonth,presentYear)
})

displayMonth(presentMonth,presentYear)
