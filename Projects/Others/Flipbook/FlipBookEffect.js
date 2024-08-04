$(document).ready(function() {
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true,
        display: 'double',
        duration: 1000,
        gradients: true,
        elevation: 50,
        when: {
            turned: function(e, page) {
                console.log('Current view: ', $(this).turn('view'));
            }
        }
    });

    $("#next").click(function() {
        $("#flipbook").turn("next");
    });

    $("#prev").click(function() {
        $("#flipbook").turn("previous");
    });
});
