//
// Ready
//
function ready() { 
    setTimeout(() => {
        document.body.className = "ready"
    }, 100);
}

$(window).on("load", ()=>{

    const types = [{title:"guide",container:"guideCards"},
                   {title:"tool",container:"toolCards"},
                   {title:"inspiration",container:"inspirationCards"},
                   {title:"workshop",container:"workshopCards"}]

    const overlayPattern = ["blue","blue","orange","blue","yellow"]
    var pi = 0;

    for (var i in types) { const type = types[i];
        var count = 0;
        for (var i in resourceList) {const res = resourceList[i];
            if (res.type == type.title) {
                // count += 1;
                // if (count > 4) break;
                $("#"+type.container).append(`
                <a class="card animCard" href="${res.link}" target="_blank">
                    <div class="overlay ${overlayPattern[pi]}">
                        <div class="title">${res.title}</div>
                        <div class="bg"></div>
                    </div>
                    <div class="img" style="background-image:url(/data/resourceImgs/${res.img});"><div></div></div>
                </a>
                `)
                pi += 1
                if (pi > overlayPattern.length - 1) pi = 0;
            }
        }
    }



})