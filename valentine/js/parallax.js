$(window).scroll(function() {
    if (window.innerWidth > 960){
        parallax();
    }
})

function parallax() {
    
    var wScroll = $(window).scrollTop();
    
    $('.parallax--box1').css('top', -5+(wScroll*0.005)+'em')
    $('.parallax--box2').css('top', -3+(wScroll*0.003)+'em')
    $('.parallax--box3').css('top', -4+(wScroll*0.002)+'em')
    $('.parallax--box4').css('top', -4+(wScroll*0.001)+'em')
    
}