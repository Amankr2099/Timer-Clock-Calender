var on = null

//changing digits 

function timerRunning() {
    sec = $("#second p").text()
    min = $("#minute p").text()
    hour = $("#hour p").text()
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
}    

//individual shadow effects on buttons

function addActive(target) {
    console.log(target.id);
    $("#"+target.id).addClass("active")
    document.querySelectorAll(".options button").forEach((e) => {
        if (e.id !== target.id) {
            $("#"+e.id).removeClass("active")
        }  
    });   
}

//adding events to each button

$("#btn1").click(function (e) {
    addActive(e.target)
    if (on !== null) {
        clearInterval(on)
    }
    on = setInterval(timerRunning, 1000)
})

$("#btn2").click(function (e) {
    addActive(e.target)
    $("#btn1").text("RESUME")
    clearInterval(on)
})

$("#btn3").click(function (e) {
    addActive(e.target)
    $("#btn1").text("START")
    $("#second p").text("00")
    $("#minute p").text("00")
    $("#hour p").text("00")
    if (on !== null) {
        clearInterval(on)
    }
    on = setInterval(timerRunning, 1000)
})

