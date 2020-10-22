//
//  Variables
//
var lastVisit = ""
var elements = {}
var gl
var w,h = 0
var run = false
const RESOLUTION = 0.5  
//
//  Main start
//

function initialize() { 

    // MARK: Regular Initialize
    $("#hero").height( $(window).height() )

    ready()


}




//
//  MARK: Functions
//


function initializeCountdown() {
    updateCountdown()
    setInterval(() => {
        updateCountdown()
    }, 60000);
}
function updateCountdown() {
    getGlobalTime((minutes)=>{
        var time = minutes*60
        var targetTime = 1604743140
        const timeInterval = targetTime - time
        $("#timer .time").removeClass("loading")
        $("#timer .time .days").text(Math.floor(timeInterval/86400))
        $("#timer .time .hours").text(Math.floor((timeInterval/1440)%24))
        $("#timer .time .minutes").text(Math.floor((timeInterval/60)%60))
    })
}


function ready(wait = 0) {

    setTimeout(() => {
        $("body").addClass("ready")
    }, 200+wait);

    initializeCountdown()

}


function getGlobalTime(callback) {
    // Minutes since epoch in PST
    console.log("request sent")
    $.post("https://currentmillis.com/time/minutes-since-unix-epoch.php",(data)=>{
        console.log(data)
        callback(parseInt(data)+1020)
    })

}

