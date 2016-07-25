
$(document).ready(function() {

//keyup for input search

    $("input").keyup(function() {

        var $val = $(this).val().toLowerCase();
        var $photos = $(".photogallery a").find("img");
        $photos.parent().hide();
        $photos.each(function() {

            var $title = $(this).attr("title").toLowerCase();
            $title += $(this).attr("alt").toLowerCase();
            if ($title.indexOf($val) != -1) {
                $(this).parent().fadeIn(800);

            }
        });


    });


});
