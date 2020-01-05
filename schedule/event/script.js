$(function() {

    var url = new URL(window.location.href)
    var eventId = url.searchParams.get("id");
    var event = null
    var found = false
    for (i in EVENTS) {
        if (EVENTS[i].id == eventId) {
            event = EVENTS[i]
            found = true
            break
        }
    }
    if (!found) {
        console.log("redirecting")
        window.location.replace("/schedule/#allEvents")
    } else {
        console.log("URIEventId="+eventId)
        console.log("Event="+event)
    }
    $("#-title").text(event.name)
    $("#-type").text(event.type)
    $("#-date").html(event.start+"–"+event.end+" "+event.date)
    $("#-location").text(event.location)
    $("#-desc").text(event.desc)


})



function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, 300+wait);
}