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


    $("#s-next .split").attr("href", "/schedule/event/?id="+nextEvent.id )
    $("#eventContainer").empty()

    $("#s-next .name").text(nextEvent.name)
    $("#s-next .date").text(nextEvent.date)
    $("#s-next .start").text(nextEvent.start)
    $("#s-next .location").text(nextEvent.location)
    $("#s-next .desc").text(nextEvent.desc)

    for (i in EVENTS) {
        var event = EVENTS[i]
        if (event.epoch > timeNow) {
            // Future event
            $("#eventContainer").append('<a href="/schedule/event/?id='+event.id+'" class="event"><p class="type">'+event.type.toUpperCase()+'</p><p>'+event.date+'</p><h1>'+event.name+'</h1></a>')
        } else {
            // Past event
            $("#pastEventContainer").prepend('<a href="/schedule/event/?id='+event.id+'" class="event"><p class="type">'+event.type.toUpperCase()+'</p><p>'+event.date+'</p><h1>'+event.name+'</h1></a>')
        }

    }


})