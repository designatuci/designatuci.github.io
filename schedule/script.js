$(function() {


    var timeNow = Math.floor((new Date()).getTime() / 1000)
    var nextEvent
    // Find and display next event
    for (i in EVENTS) {
        if (EVENTS[i].epoch > timeNow) {
            nextEvent = EVENTS[i]
            break
        }
    }


    $("#eventContainer").empty()

    $("#next .name").text(nextEvent.name)
    $("#next .date").text(nextEvent.date)
    $("#next .time").text(nextEvent.start)
    if ("link" in nextEvent) {
        $("#next .link").attr("href", nextEvent.link)
        $("#next .link").text(nextEvent.linkText)
    }
    if (nextEvent.id == "x") {
        $("#next .title").text(nextEvent.type)
    }
    if (nextEvent.type == "announcement") {
        $("#next").addClass("announcement")
        $("#next .title").text("Announcement")
        $("#next .container").removeAttr("href")
    }
    $("#next .location").text(nextEvent.location)
    $("#next .desc").html(nextEvent.desc)

    var upcomingCount = 0

    for (i in EVENTS) {
        var event = EVENTS[i]
        if (event.id == "x" || event.date != "") {
            // check for slide link
            var slidelink = ""
            if (event.slides != null) {
                slidelink = `<a class="slides" href="${event.slides}" target="_blank">View slides</a>`
            }
            if (event.epoch > timeNow) {
                // Future event
                upcomingCount += 1
                if (event.id == "x") {
                    var element = `
                    <div class="event announce">
                        <div class="exit"></div>
                        <p class="type">${event.type.toUpperCase()}</p>
                        <p>${event.date}</p>
                        <h1>${event.name}</h1>
                    </div>
                    `
                    $("#eventContainer").append(element)
                } else {
                    var element = `
                    <div href="/schedule/event/?id=${event.id}" class="event expandable">
                        <div class="exit"></div>
                        <p class="type">${event.type.toUpperCase()}</p>
                        <p>${event.date} at ${event.start}</p>
                        <h1>${event.name}</h1>
                        ${slidelink}
                        <p class="desc">${event.desc}</p>
                    </div>`
                    $("#eventContainer").append(element)
                }
            } else {
                // Past event
                var element = `
                <div href="/schedule/event/?id=${event.id}" class="event expandable">
                    <div class="exit"></div>
                    <p class="type">${event.type.toUpperCase()}</p>
                    <h1>${event.name}</h1>
                    ${slidelink}
                    <p class="desc">${event.desc}</p>
                </div>
                `
                $("#pastEventContainer").prepend(element)
            }
        }

    }

    if (upcomingCount < 3) {
        $("#upcomingEvents").remove()
    }



    $(".event.expandable").click(function() {

        $(this).attr("hide","true")
        $("body").css({
            overflow: 'hidden'
        })
        $("#modal").removeAttr("hidden")
        $("#modal .container .window").html($(this).html())

        var exitFunc = () => {
            $(this).removeAttr("hide")
            $("#modal").attr("hidden","true")
            $("body").css({
                overflow: ''
            })
        }

        // Enable exiting
        $("#modal .exit").click(function() {
            exitFunc()
        })
        // Background click exiting 
        $("#modal .container").click(function(e) {
            var rect = $("#modal .window")[0].getBoundingClientRect();
            if (!(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom)) {
                exitFunc()
            }            
        })

        
    })

}) // End of init func

function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, 100+wait);
}