$(document).ready(()=>{
///////////////////////////////////////////////Mobile Menu
var checkClick = false;
$('.burger-button-wrapper').click(()=>{
        if(checkClick == false){
            //////Button Animation
            $('.burger-button').addClass('burger-toggle-move');
            $('.burger-button').delay(350).queue(function(next){
                $('.burger-button').addClass('burger-toggle-rotate');
                next();
            });
            //////Side Bar Animation
            $('nav').css({
                'left': '7px'
            })
            checkClick = true;  
        }else
        if(checkClick == true){
            //////Button Animation
            $('.burger-button').removeClass('burger-toggle-rotate');
            $('.burger-button').delay(350).queue(function(next){
                $('.burger-button').removeClass('burger-toggle-move');
                next();
            });  
            //////Side Bar Animation
            $('nav').css({
                'left': '-100%'
            })
            checkClick = false;
        }
})
})

