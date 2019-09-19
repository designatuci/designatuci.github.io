$(function() {

    var url = new URL(window.location.href)
    var eventId = url.searchParams.get("id");
    var event = null
    var found = false
    for (i in EVENTS) {
        if (EVENTS[i].id == eventId) {
            event = EVENTS[i]
            found = true
        }
    }
    if (!found) {
        console.log("redirecting")
        window.location.replace("/schedule/#allEvents")
    }
    $("#-title").text(event.name)
    $("#-type").text(event.type)
    $("#-date").html(event.start+"–"+event.end+"<span>"+event.date+"</span>")
    $("#-location").text(event.location)
    $("#-desc").text(event.desc)


})

