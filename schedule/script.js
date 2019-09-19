$(function() {


    $("#s-next .split").attr("href", "/schedule/event/?id="+EVENTS[0].id )
    $("#eventContainer").empty()

    $("#s-next .name").text(EVENTS[0].name)
    $("#s-next .date").text(EVENTS[0].date)
    $("#s-next .start").text(EVENTS[0].start)
    $("#s-next .location").text(EVENTS[0].location)
    $("#s-next .desc").text(EVENTS[0].desc)

    for (i in EVENTS) {
        var event = EVENTS[i]
        $("#eventContainer").append('<a href="/schedule/event/?id='+event.id+'" class="event"><h1>'+event.name+'</h1><p class="type">'+event.type.toUpperCase()+'</p><p>'+event.date+'</p></a>')

    }


})