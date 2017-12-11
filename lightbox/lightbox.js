"use strict";

jQuery.fn.lightbox = function() {
    $(this).click(function(event) {
        event.preventDefault();

        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let image=$.parseHTML("<img id='overlay-img'></img>");
        let src = $(this).attr("href");
        $(image).attr("src",src);

        let container = $.parseHTML("<div id='overlay-container'>");
        $(container).click(function(event) {
            $("#overlay-container").remove();
            $("#overlay").remove();
        });
        $(container).append(image);
        $("body").append(container);
    });

    $(document).keydown(function(event) {
        if(event.key == "Escape") {
            $("#overlay-container").remove();
            $("#overlay").remove();
        }
    });
}