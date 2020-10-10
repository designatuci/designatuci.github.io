//
//  Main start
//
var lastVisit = ""

//
//  Main start
//

function initialize() { 

    $("#hero").height( $(window).height() )

    initializeCountdown()

    lastVisit = Cookie.get("lastVisitSpecial")
    if ( lastVisit == "" || parseInt(lastVisit) + 1 <= time() ) {
        $("body").addClass("longIntro")
        setTimeout(() => {
            $("body").addClass("expand")
        }, 1600);
        ready(200)
    } else {
        $("body").addClass("expand")
        ready()
    }
    Cookie.set("lastVisitSpecial",time())


    $(".metalink").click(function (e){
        scrollTo = $(e.target).attr("scrollTo")
        console.log("scroll to "+scrollTo)
        if (scrollTo != "#hero") {
            pageScrolled = true
            $("body").addClass("scrolled")
        } else {
            pageScrolled = false
            $("body").removeClass("scrolled")
        }
        if ( 600 < Math.abs($('html').scrollTop() - $(scrollTo).offset().top) ) {
            // fancy scroll
            if ( 0 < $('html').scrollTop() - $(scrollTo).offset().top) {
                // downwards
                $('html').scrollTop( $(scrollTo).offset().top + 20 )
                $('html').animate({
                    scrollTop: $(scrollTo).offset().top
                }, duration=300 )
            } else {
                // upwards
                $('html').scrollTop( $(scrollTo).offset().top - 20 )
                $('html').animate({
                    scrollTop: $(scrollTo).offset().top
                }, duration=300)
            }
        } else {
            // simple scroll
            $('html').animate({
                scrollTop: $(scrollTo).offset().top
            }, 300)
        }
    });

}




//
//  Functions
//

function time() {
    return Math.round(new Date() / 1000);
}

function resize() {
    $("#hero").height( $(window).height() )
}

function initializeCountdown() {
    updateCountdown()
    setInterval(() => {
        updateCountdown()
    }, 60000);
}
function updateCountdown() {
    getGlobalTime((minutes)=>{
        var time = minutes*60
        var targetTime = 1604743140
        const timeInterval = targetTime - time
        console.log(timeInterval)
        $("#timer .time").removeClass("loading")
        $("#timer .time .days").text(Math.floor(timeInterval/86400))
        $("#timer .time .hours").text(Math.floor((timeInterval/1440)%24))
        $("#timer .time .minutes").text(Math.floor((timeInterval/60)%60))
    })
}


function ready(wait = 0) {

    setTimeout(() => {
        $("body").addClass("ready")
    }, 200+wait);

}


function getGlobalTime(callback) {
    // Minutes since epoch in PST
    $.post("https://currentmillis.com/time/minutes-since-unix-epoch.php",(data)=>{
        callback(parseInt(data)+1020)
    })

}


var pageScrolled = false
function scroll() {
    
    s = window.pageYOffset

    if (s > window.innerHeight*0.2) {
        if (!pageScrolled) {
            pageScrolled = true
            $("body").addClass("scrolled")
        }
    } else {
        if (pageScrolled) {
            pageScrolled = false
            $("body").removeClass("scrolled")
        }
    }

}


//
//  Libraries
//

class Cookie {
    static set(name,value,exDays=-1) {
        if (exDays>0) {
            var d = new Date()
            d.setTime(d.getTime() + (exDays*24*60*60*1000))
            var expires = "expires="+ d.toUTCString()
            document.cookie = name + "=" + value + ";" + expires + ";path=/"
        } else {
            document.cookie = name + "=" + value + ";path=/"
        }
    }
    static get(name) {
        var name = name + "="
        var decodedCookie = decodeURIComponent(document.cookie)
        var ca = decodedCookie.split(';')
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0) == ' ') {
            c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ""
    }
    static clear() {
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
    static delete(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}