$(function () {
    //show
    $(document).on('click', '.trigger', function () {
        $(this).addClass("on");
        $(this).tooltip({
            items: '.trigger.on',
            position: {
                my: "left+30 center",
                at: "right center",
                collision: "flip"
            }
        });
        $(this).trigger('mouseenter');
    });
    //hide
    $(document).on('click', '.trigger.on', function () {
        $(this).tooltip('close');
        $(this).removeClass("on");
    });
    //prevent mouseout and other related events from firing their handlers
    $(".trigger").on('mouseout', function (e) {
        e.stopImmediatePropagation();
    });
});