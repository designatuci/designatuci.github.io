$(function() {



    var timeNow = Math.round(new Date() / 1000);
    var nextEvent
    // Find and display next event
    for (i in EVENTS) {
        if (EVENTS[i].epoch > timeNow) {
            nextEvent = EVENTS[i]
            break
        }
    }

    $("#eventContainer").empty()

    $("#next .container").attr("href", "/schedule/event/?id="+nextEvent.id )
    $("#next .name").text(nextEvent.name)
    $("#next .date").text(nextEvent.date)
    $("#next .time").text(nextEvent.start)
    if (nextEvent.start == "") {
        $("#next").addClass("announcement")
        $("#next .title").text("Announcement")
        $("#next .container").removeAttr("href")
    }
    $("#next .location").text(nextEvent.location)
    $("#next .desc").text(nextEvent.desc)

    for (i in EVENTS) {
        var event = EVENTS[i]
        if (event.id == "a" || event.start != "") {
        if (event.epoch > timeNow) {
                // Future event
                $("#eventContainer").append('<a href="/schedule/event/?id='+event.id+'" class="event"><p class="type">'+event.type.toUpperCase()+'</p><p>'+event.date+'</p><h1>'+event.name+'</h1></a>')
            } else {
                // Past event
                $("#pastEventContainer").prepend('<a href="/schedule/event/?id='+event.id+'" class="event"><p class="type">'+event.type.toUpperCase()+'</p><p>'+event.date+'</p><h1>'+event.name+'</h1></a>')
            }
        }

    }





})



function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, 100+wait);
}