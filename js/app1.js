var galleryItems = [{
        "href": "1.jpg",
        "title": "Hay Bales",
        "alt": "I love hay bales. Took this snap on a drive through the countryside past some straw fields."
    },

    {
        "href": "2.jpg",
        "title": "Lake",
        "alt": "The lake was so calm today. We had a great view of the snow on the mountains from here."
    },

    {
        "href": "3.jpg",
        "title": "Canyon",
        "alt": "I hiked to the top of the mountain and got this picture of the canyon and trees below."
    },

    {
        "href": "4.jpg",
        "title": "Iceberg",
        "alt": "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
    },

    {
        "href": "5.jpg",
        "title": "Desert",
        "alt": "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
    },

    {
        "href": "6.jpg",
        "title": "Fall",
        "alt": "Fall is coming, I love when the leaves on the trees start to change color."
    },

    {
        "href": "7.jpg",
        "title": "Plantation",
        "alt": "I drove past this plantation yesterday, everything is so green!"
    },

    {
        "href": "8.jpg",
        "title": "Dunes",
        "alt": "My summer vacation to the Oregon Coast. I love the sandy dunes!"
    },

    {
        "href": "9.jpg",
        "title": "Countryside Lane",
        "alt": "We enjoyed a quiet stroll down this countryside lane."
    },

    {
        "href": "10.jpg",
        "title": "Sunset",
        "alt": "Sunset at the coast! The sky turned a lovely shade of orange."
    },

    {
        "href": "11.jpg",
        "title": "Cave",
        "alt": "I did a tour of a cave today and the view of the landscape below was breathtaking."
    },

    {
        "href": "12.jpg",
        "title": "Bluebells",
        "alt": "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
    },

    {
        "href": "13.jpg",
        "src": "https://www.youtube.com/embed/SbeHjcLOkgs?autoplay=false",
        "title": "Travel Love",
        "alt": "Top 10 of the most breathtaking places on this planet that you need to visit."
    },

    {
        "href": "14.jpg",
        "src": "https://www.youtube.com/embed/JxYConpTVZI?autoplay=false",
        "title": "Hyper Travel",
        "alt": "This film is a HDR hyperlapse postcard that will take you to a journey through Georgia."
    },

    {
        "href": "15.jpg",
        "src": "https://www.youtube.com/embed/GCcdBx4UUgk?autoplay=false",
        "title": "Travel",
        "alt": "A mix of memories from past years adventures for my travelblog on ✈ flysleepy.com."
    },

    {
        "href": "16.jpg",
        "src": "https://www.youtube.com/embed/MtCMtC50gwY?autoplay=false",
        "title": "NewYork Travel",
        "alt": "New York City is an international metropolis built on the shoulders of immigrants and their descendants."
    },

];




$(document).ready(function() {



var $image = $("<img>");
var $gallery = $(".photogallery");


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
