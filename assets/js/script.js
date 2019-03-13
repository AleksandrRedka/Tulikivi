(function(){
    var slides = $('.main_slide');
    var counter = $('.main_slide_count span');
    var count = 0;
    slides.click(function(){
        if($(this).hasClass('main_slide_active')) return;
        count = slides.index(this);
        var countText = count + 1 + '/';
        counter.text( '0' + countText);
        $('.main_slide').removeClass('main_slide_active');
        $(this).addClass('main_slide_active');
    });
    $('.main_slide_left_arrow').click(function(){
        event.stopPropagation();
        slides.removeClass('main_slide_active');
        if(count === 0) {
            count = slides.length - 1;
            $(slides[count]).addClass('main_slide_active');
        } else {
            count = count - 1;
            $(slides[count]).addClass('main_slide_active');
        }
        var countText = count + 1 + '/';
        counter.text( '0' + countText);
    });
    $('.main_slide_right_arrow').click(function(){
        console.log('here');
        event.stopPropagation();
        slides.removeClass('main_slide_active');
        if(count === slides.length -1) {
            count = 0;
            $(slides[count]).addClass('main_slide_active');
        } else {
            count = count + 1;
            $(slides[count]).addClass('main_slide_active');
        }
        var countText = count + 1 + '/';
        counter.text( '0' + countText);
    });
})();
$('.main_slide_img_viewer img').click(function(){
    $(this).toggleClass('rotate_img');
});
$('.main_popular_category_img_viewer img').click(function(){
    $(this).toggleClass('rotate_img');
});
(function(){
    $('.main_popular_slider_viewer').slick({
        infinite: true,
        zIndex: 2,
        prevArrow : '<button type="button" class="slick-category slick-prev"><img src="assets/img/slick_l.svg" alt=""></button>',
        nextArrow : '<button type="button" class="slick-category slick-next"><img src="assets/img/slick_r.svg" alt=""></button>',
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1
    });
    $('.slick_d_arrow').click(function(){
        var parent  = $(this).parent();
        parent.toggleClass('main_popular_slider_active');
        $(this).toggleClass('slick_d_arrow_active');
    });
})();


(function(){
    $('.main_reviews_slider').slick({
        infinite: true,
        zIndex: 2,
        arrows: true,
        prevArrow : '<button class="slick-review slick-prev"><img src="assets/img/review_arrow.svg" alt=""></button>',
        nextArrow : '<button class="slick-review slick-next"><img src="assets/img/review_arrow.svg" alt=""></button>',
        speed: 300,
        slidesToShow: 3,
        // adaptiveHeight: true,
        slidesToScroll: 1
    });
})();

(function(){
    $('.main_why_catalog_list').slick({
        arrows: true,
        prevArrow : '<button class="slick-review slick-prev"><img src="assets/img/review_arrow_white.svg" alt=""></button>',
        nextArrow : '<button class="slick-review slick-next"><img src="assets/img/review_arrow_white.svg" alt=""></button>'
    });
})();
// Slick Works--------------------------------------
$(document).ready(function () {
    $('.slider_works_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-review slick-prev"><img src="assets/img/l_arrow_slider.svg" alt=""></button>',
        nextArrow: '<button class="slick-review slick-next"><img src="assets/img/r_arrow_slider.svg" alt=""></button>',
        dots: false,
        customPaging: function (slider, i) {
            var length = slider.$slides.length;
            $('.slider_works_nav_count_check').text(i + 1);
            $('.slider_works_nav_count_quantity').text(length);
            console.log(i);
            // console.log(length)
            // return i + 1;

        }
    });
});
// Slick Popular Мodels-----------------------------------------
$(document).ready(function () {
    $('.popular_models').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-review slick-prev slick-models-prev "><img src="assets/img/l_arrow_slider.svg" alt=""></button>',
        nextArrow: '<button class="slick-review slick-next slick-models-next "><img src="assets/img/r_arrow_slider.svg" alt=""></button>',
    });
});


//---Table on Page Proguct------------------------------------------------------------

(function () {
    var markers = $('.product_specifications_marker');
    var blocks = $('.product_specifications_values_content');
    markers.click(function () {
        markers.removeClass('product_specifications_marker_active');
        $(this).addClass('product_specifications_marker_active');
        blocks.css('display', 'none');
        var i = markers.index(this);
        blocks[i].style.display = 'flex';
    })
})();

// Slick Slider photo on page Individual Order

$(document).ready(function () {
    $('.individual_order_card_img_slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-review slick-prev slick-photo-prev"><img src="assets/img/l_arrow_slider.svg" alt=""></button>',
        nextArrow: '<button class="slick-review slick-next slick-photo-next"><img src="assets/img/r_arrow_slider.svg" alt=""></button>',
    });
});

// ----------------------------------
// Counter Slider
(function () {
        $('.slider_works_list').on('init', function (event, slick) {
            var imageArr = document.querySelectorAll('.about_slider_img');
            var countImage = document.querySelector('.slider_works_nav_count_quantity');
            var counterText = document.querySelector('.slider_works_nav_count_check');
            var imagesLength = imageArr.length;
            countImage.textContent = imagesLength;
            var count = 1;
            $('.slick-next').click(
                function () {
                    count++;
                    if (count === imagesLength + 1) {
                        count = 1;
                        setTimeout(counterText.textContent = `0${count}`,2000) ;
                        return;
                    }
                    if (count < imagesLength + 1) {
                       setTimeout(counterText.textContent = `0${count}`,2000) ;
                       return;
                    }
                });
            $('.slick-prev').click(
                function () {
                    count--;
                    if (count < 1) {
                        count = 7;
                        setTimeout(counterText.textContent = `0${count}`,2000) ;
                        return;
                    }
                    if (count < imagesLength + 1) {
                        setTimeout(counterText.textContent = `0${count}`,2000) ;
                        return;
                    }
                }
            )
        });
    }
)();
//----Pop-up--Image/Frame------------------------------------

(function () {
    var popUpItem = $('.pop-up-js');
    var contentBox = $('.pop_up_content');
    popUpItem.click(function (e) {
            e.preventDefault();
            var target = e.target;
            console.log(target);
            $('.pop_up_box').addClass('pop_up_open');
            $('.main_wrapper').addClass('main_wrapper_pop');
            $('body').css('overflow', 'hidden');
            var elementClone = target.cloneNode(true);
            contentBox.append(elementClone);

        }
    );
    $('.button_close_pop').click(function (e) {
        e.preventDefault();
        $('.pop_up_box').removeClass('pop_up_open');
        $('.main_wrapper').removeClass('main_wrapper_pop');
        contentBox.empty();
        console.log('no delete');
        $('body').css('overflow', 'auto');


    })

})();
//------------------------------------------------------------------

//----Pop-up----Page Contacts----------------------------------------
(function () {
    $('.pop-up-js-form').click(function (e) {
        e.preventDefault();
        $('.pop_up_box').addClass('pop_up_open');
        $('.main_wrapper').addClass('main_wrapper_pop');
        $('body').css('overflow', 'hidden');
    });
    $('.button_close_pop_contacts').click(function (e) {
        e.preventDefault();
        $('.pop_up_box').removeClass('pop_up_open');
        $('.main_wrapper').removeClass('main_wrapper_pop');
        $('body').css('overflow', 'auto')
    })
})();
// -----------------------------------------------------------------

//---------Page Ovens Top section-----------------------------------
(function () {
    $('.info-open-js').click(function () {
        $(".ovens_top_information_open").toggleClass('close-info-js', 1000);
        $('.ovens_top_information_title').toggleClass('text-orange-js', 1000);
        $(this).toggleClass('arrow-js', 1000);
    })
})();
//------------------------------------------------------------------
//
// (function() {
//     // Init
//     var targets = $('.main_slide_img_viewer');
//     var inside = $('.main_slide_img_viewer img');
//     // targets.each(function(index){
//     //     console.log(this);
//     //    effect3d(this, inside[index]);
//     // });
//     // $(targets[1]).css({
//     //     // perspective: '170px'
//     // })
//     effect3d(targets[0], inside[0]);
//     effect3d(targets[1], inside[1]);
//     effect3d(targets[2], inside[2]);
//     effect3d(targets[3], inside[3]);
//     function effect3d(con, inn) {
//         var container = con,
//             inner = inn;
//         // Mouse
//         var mouse = {
//             _x: 0,
//             _y: 0,
//             x: 0,
//             y: 0,
//             updatePosition: function(event) {
//                 var e = event || window.event;
//                 this.x = e.clientX - this._x;
//                 this.y = (e.clientY - this._y) * -1;
//                 console.log(this.y);
//             },
//             setOrigin: function(e) {
//                 this._x = e.offsetLeft + Math.floor(e.offsetWidth / 1.7);
//                 this._y = e.offsetTop + Math.floor(e.offsetHeight / 1.7);
//             },
//             show: function() {
//                 return "(" + this.x + ", " + this.y + ")";
//             }
//         };
//
//         // Track the mouse position relative to the center of the container.
//         mouse.setOrigin(container);
//
//         //----------------------------------------------------
//
//         var counter = 0;
//         var refreshRate = 10;
//         var isTimeToUpdate = function() {
//             return counter++ % refreshRate === 0;
//         };
//
//         //----------------------------------------------------
//
//         var onMouseEnterHandler = function(event) {
//             update(event);
//         };
//
//         var onMouseLeaveHandler = function() {
//             inner.style = "";
//         };
//
//         var onMouseMoveHandler = function(event) {
//             if (isTimeToUpdate()) {
//                 update(event);
//             }
//         };
//
//         //----------------------------------------------------
//
//         var update = function(event) {
//             mouse.updatePosition(event);
//             updateTransformStyle(
//                 (mouse.y / inner.offsetHeight / 2).toFixed(2),
//                 (mouse.x / inner.offsetWidth / 2).toFixed(2)
//             );
//         };
//
//         var updateTransformStyle = function(x, y) {
//             var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//             inner.style.transform = style;
//             inner.style.webkitTransform = style;
//             inner.style.mozTranform = style;
//             inner.style.msTransform = style;
//             inner.style.oTransform = style;
//         };
//
//         //--------------------------------------------------------
//
//         container.onmousemove = onMouseMoveHandler;
//         container.onmouseleave = onMouseLeaveHandler;
//         container.onmouseenter = onMouseEnterHandler;
//     }
// })();

