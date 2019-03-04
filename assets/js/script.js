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

// Slick Works--------------------------------------
$(document).ready(function(){
    $('.slider_works_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow : '<button class="slick-review slick-prev"><img src="assets/img/l_arrow_slider.svg" alt=""></button>',
        nextArrow : '<button class="slick-review slick-next"><img src="assets/img/r_arrow_slider.svg" alt=""></button>',
        dots: true,
        customPaging : function(slider, i) {
            var length = slider.$slides.length;
            $('.slider_works_nav_count_check').text(i+1);
            $('.slider_works_nav_count_quantity').text(length);
            console.log(i);
            // console.log(length)
            // return i + 1;

        }
    });
});
// Slick Popular Мodels-----------------------------------------
$(document).ready(function(){
    $('.popular_models').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow : '<button class="slick-review slick-prev slick-models-prev"><img src="assets/img/l_arrow_slider.svg" alt=""></button>',
        nextArrow : '<button class="slick-review slick-next slick-models-next"><img src="assets/img/r_arrow_slider.svg" alt=""></button>',
    });
});
//---------------------------------------------------------------
(function () {
    var markers = $('.product_specifications_marker');
    var blocks = $('.product_specifications_values_content');
    markers.click(function () {
        markers.removeClass('product_specifications_marker_active');
        $(this).addClass('product_specifications_marker_active');
        blocks.css('display','none');
        var i = markers.index(this);
        blocks[i].style.display='flex';
    })
})();



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

