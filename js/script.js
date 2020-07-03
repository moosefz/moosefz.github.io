// Scroll changes navbar colour from transparent to grey
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


// Multiple tab open
document.getElementById("weather-wa").addEventListener("click", (evt) => {
    window.open("https://github.com/moosefz/weather-wa");
})

document.getElementById("io-msg").addEventListener("click", (evt) => {
    window.open("https://github.com/moosefz/socket-messenger");
})