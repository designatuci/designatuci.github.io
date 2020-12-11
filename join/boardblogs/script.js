function ready(wait = 0) {

    setTimeout(() => {
        document.body.className = "ready"
    }, 200+wait);

    var someText = "cont" + "act@" + "designatuci" + ".com"
    document.getElementById("m").innerHTML = someText
    
}