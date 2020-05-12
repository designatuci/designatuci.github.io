$(function() {

    $(".person").click(function() {

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



})


function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, 200+wait);
}