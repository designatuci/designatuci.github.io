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

    $("#-name").text(nextEvent.name)
    $("#-date").text(nextEvent.date + " – " + nextEvent.start)
    $("#-desc").text(nextEvent.desc)
    $("#-location").text(nextEvent.location)


})