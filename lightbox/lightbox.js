"use strict";

jQuery.fn.lightbox = function() {
    $(this).click(function(event) {
        event.preventDefault();

        let overlay = $.parseHTML("<div id='lightbox__overlay'></div>");
        $("body").append(overlay);

        let image=$.parseHTML("<img id='lightbox__overlay-img'></img>");
        let src = $(this).attr("href");
        $(image).attr("src",src);

        let container = $.parseHTML("<div id='lightbox__overlay-container'>");
        $(container).click(function(event) {
            $("#lightbox__overlay-container").remove();
            $("#lightbox__overlay").remove();
        });
        $(container).append(image);
        $("body").append(container);
    });

    $(document).keydown(function(event) {
        if(event.key == "Escape") {
            $("#lightbox__overlay-container").remove();
            $("#lightbox__overlay").remove();
        }
    });
    return this;
}