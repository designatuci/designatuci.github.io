//
//  Main start
//
var lastVisit = ""

//
//  Main start
//

$(()=>{

    lastVisit = Cookie.get("lastVisit")
    
    if ( lastVisit == "" || parseInt(lastVisit) + 600 <= time() ) {
        $("#nav").addClass("long")
        ready(200)
    } else {
        ready()
    }
    Cookie.set("lastVisit",time())
    

})




//
//  Functions
//

function time() {
    return Math.round(new Date() / 1000);
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