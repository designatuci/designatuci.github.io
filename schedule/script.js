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

    $("#next .name").text(nextEvent.name)
    $("#next .date").text(nextEvent.date)
    if ("link" in nextEvent) {
        $("#next .link").attr("href", nextEvent.link)
        $("#next .link").text(nextEvent.linkText)
    }
    if (nextEvent.type == "announcement") {
        $("#next").addClass("announcement")
        $("#next .title").text("Announcement")
        $("#next .container").removeAttr("href")
    }
    $("#next .location").text(nextEvent.location)
    $("#next .desc").text(nextEvent.desc)

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
                        <p>${event.date}</p>
                        <h1>${event.name}</h1>
                        ${slidelink}
                        <p class="desc">${event.desc}</p>
                        <div class="bg"></div>
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
                    <div class="bg"></div>
                </div>
                `
                $("#pastEventContainer").prepend(element)
            }
        }

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