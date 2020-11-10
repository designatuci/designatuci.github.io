//
//  Variables
//
var lastVisit = ""
var elements = {}
let SCHEDULE = [
    {
        start: 15340799,
        note: "Time remaining to sign up"
    }
]
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
}
function updateCountdown() {
    getGlobalTime((minutes)=>{
        var time = minutes*60
        var i = 0
        while (SCHEDULE[i].start < time) {
            ++i
            if (i>SCHEDULE.length-1) {
                console.log("done")
                $("#timer .time .days").text("0")
                $("#timer .time .hours").text("0")
                $("#timer .time .minutes").text("0")
                $("#timer .text").text("Thanks for coming!")
                return
            }
        }
        const timeInterval = SCHEDULE[i].start - time
        $("#timer .time").removeClass("loading")
        $("#timer .time .days").text(Math.floor(timeInterval/86400))
        $("#timer .time .hours").text(Math.floor((timeInterval/3600)%24))
        $("#timer .time .minutes").text(Math.floor((timeInterval/60)%60))
        $("#timer .text").text(SCHEDULE[i].note)
        setTimeout(() => {
            updateCountdown()
        }, 60000);
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

