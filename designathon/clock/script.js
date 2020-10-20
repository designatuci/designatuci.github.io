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
        console.log(time)
        var targetTime = 1605337200 // Submission deadline: 1606057200
        const timeInterval = targetTime - time
        $("#timer .time").removeClass("loading")
        $("#timer .time .days").text(Math.floor(timeInterval/86400))
        $("#timer .time .hours").text(Math.floor((timeInterval/3600)%24))
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
    // Minutes since epoch in GMT
    $.post("https://currentmillis.com/time/minutes-since-unix-epoch.php",(data)=>{
        callback(parseInt(data))
    })
}

