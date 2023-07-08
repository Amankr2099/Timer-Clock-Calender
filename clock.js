var today = new Date()

$("#second p").text(today.getSeconds())
$("#minute p").text(today.getMinutes())
$("#hour p").text(today.getHours())
var sec = $("#second p").text()
var min = $("#minute p").text()
var hour = $("#hour p").text()

var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
$(".date_details p").text(`${today.getDate()}  ${arr[today.getMonth()]}  ${today.getFullYear()}`)

setInterval(() => {
    sec++
    sec < 10 ? $("#second p").text("0" + sec) : $("#second p").text(sec)
    if (sec === 60) {
        sec = 0
        min++
        min < 10 ? $("#minute p").text("0" + min) : $("#minute p").text(min)
        $("#minute p").text(min);
        if (min === 60) {
            min = 0
            hour++
            hour < 10 ? $("#hour p").text("0" + hour) : $("#hour p").text(hour)
        }
    }
}, 1000);
