// wow js settings
$(document).ready(()=>{
    new WOW().init();
});

// Spoiler settings
function spoilerToggle(id){
    let spoiler_content = $('#'+id + ' .spoiler__content');
    spoiler_content.animate({  
        height: 'toggle'
    }, ()=>{
        if(spoiler_content.css('display') == "block"){
            $('#'+id + ' .spoiler__title').text('Свернуть описание');
        }else{
            $('#'+id + ' .spoiler__title').text('Развернуть описание');
        }
    });
}

// work slider and advantage slider settings
let isActiveWorkSlider = false;
let isActiveAdvantageSlider = false;

let windowWidth = window.innerWidth;
$(window).resize(function() {
    windowWidth = window.innerWidth;
    resizeWorkSlider(windowWidth);
    resizeAdvantageSlider(windowWidth);
});

// works slider
function resizeWorkSlider(width){
    if (width < 767 && !isActiveWorkSlider) {
        isActiveWorkSlider = true;
        $('.work__slider').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            autoplay: true
        });
    } else if(width >= 767 && isActiveWorkSlider) {
        isActiveWorkSlider = false;
        $('.work__slider').slick("unslick");
    }
}
resizeWorkSlider(windowWidth);

// advantage slider
function resizeAdvantageSlider(width){
    if (width < 767 && !isActiveAdvantageSlider) {
        isActiveAdvantageSlider = true;
        $('.advantage__slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            autoplay: true,
            // TODO: при натягивании верстки на движок, нужно прописать правильные пути для изображений стрелок
            prevArrow: "<button class='advantage__arrows'><img src='../img/common/left-arrow.svg' alt='Назад'></button>", 
            nextArrow: "<button class='advantage__arrows'><img src='../img/common/right-arrow.svg' alt='Вперед'></button>",
        });
    } else if(width >= 767 && isActiveAdvantageSlider) {
        isActiveAdvantageSlider = false;
        $('.advantage__slider').slick("unslick");
    }
}
resizeAdvantageSlider(windowWidth);


// results slider
$('.results__slider').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});