$(function() {

    $(".person").click(function() {

        $(this).attr("hidden","true")
        $("body").css({
            overflow: 'hidden'
        })
        $("#modal").removeAttr("hidden")
        $("#modal .container .window").html($(this).html())

        // Enable exiting
        $("#modal .exit").click(function() {
            $("#modal").attr("hidden","true")
            $(this).removeAttr("hidden")
            $("body").css({
                overflow: ''
            })
        })
        
    })

})