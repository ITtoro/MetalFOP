$(function() {
    $('input, textarea').placeholder();
});
$(document).ready(function() {

    var currentPosition = 0;
    var slideWidth = 940;
    var slides = $('.slide');
    var numberOfSlides = slides.length;

    // Remove scrollbar in JS
    $('#slidesContainer').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slides
        .wrapAll('<div id="slideInner"></div>')
        // Float left to display horizontally, readjust .slides width
        .css({
            'float': 'left',
            'width': slideWidth
        });

    // Set #slideInner width equal to total width of all slides
    $('#slideInner').css('width', slideWidth * numberOfSlides);

    // Insert controls in the DOM
    $('#slideshow')
        .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
        .append('<span class="control" id="rightControl">Clicking moves right</span>');

    // Hide left arrow control on first load
    manageControls(currentPosition);

    // Create event listeners for .controls clicks
    $('.control').bind('click', function() {
        if ($(this).hasClass("entable")) {
            // Determine new position
            currentPosition = ($(this).attr('id') == 'rightControl') ? currentPosition + 1 : currentPosition - 1;

            // Hide / show controls
            manageControls(currentPosition);
            // Move slideInner using margin-left
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
        };
    });

    // manageControls: Hides and Shows controls depending on currentPosition
    function manageControls(position) {
        // Hide left arrow if position is first slide
       
    }


    $('.soty3 a').click(function(event) {
        $.loaddata = $(this).data('cat');
        $.loadtitle = $(this).data('title');
        $('#cells h2').html($.loadtitle);
       


    });



    setInterval('header_timer();', 2150);

});


$.times = 1;

function header_timer() {
    $('header').css({
        'background': 'url(img/bg/' + $.times + '.jpg)',
        'background-size': 'cover'
    });
    $.times = $.times + 1;
    if ($.times > 6) {
        $.times = 1
    }
}