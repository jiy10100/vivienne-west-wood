$(document).ready(function(){
    AOS.init();

    var swiper = new Swiper(".banner-img", {
        loop: true,
        autoplay:{
            delay:2900,
        }
    });
    
    const sct= $(window).scrollTop();
    console.log(sct);

    $(window).scroll(function(){
        const sct= $(window).scrollTop();
        console.log(sct);

        if(sct>= 1000){
            $('.header-area,.header-logo svg').addClass('active');
            $('#hamburger span').addClass('on');
            $('.header-area .header-logo').addClass('on');

        }else{
        $('.header-area,.header-logo svg').removeClass('active');
        $('#hamburger span').removeClass('on');
        $('.header-area .header-logo').removeClass('on');
        }
    });

    $('#hamburger').click(function(){
        $(this).toggleClass('hamburger');
        $('.menu-bar-box').toggleClass('active');
    });

    $('.cate-box li').mouseenter(function(){
        const result = $(this).attr('data-image');
        $('.cate-photo').css({
            backgroundImage : `url(${result})`
        });
    });
    $('.cate-box li').mouseleave(function(){
        $('.cate-photo').css({
            backgroundImage : ``
        });
    });


});