$(document).ready(function () {


    /* Scroll hire me button to contact page */
    $('.contact-me').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    /* Charts*/

    $('.chart').waypoint(function () {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });


    /* VEGAS Home Slider */

    $('#page-welcome').vegas({
        slides: [
            {src: 'img/slider/54.jpg'},
            {src: 'img/slider/53.jpg'},
            {src: 'img/slider/56.jpg'},
            {src: 'img/slider/48.jpg'}
        ],
        overlay: true
    });

    $("#vegas-next").click(function () {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function () {
        $('#page-welcome').vegas('previous');
    });


});
