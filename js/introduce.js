
var swiper = new Swiper('.introduce-all', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop:true,
  autoplay:{
    disableOnInteraction:false
  }
});
var swiper1 = new Swiper('.slide-all', {
  loop:true,
  slidesPerView:2.5,
  spaceBetween:'0.74%',
});
document.querySelector('.will-show .ver-slide-all').style.height = $('.ver-slide-slider>a>img').height()*1*2.5+10+'px'
var swiper2 = new Swiper('.will-show .ver-slide-all', {
  direction:'vertical',
  spaceBetween: 5,
  slidesPerView: 2.5,
  touchMoveStopPropagation: false,
});
document.querySelector('.now-show .ver-slide-all').style.height = $('.ver-slide-slider>a>img').height()*1*2.5+10+'px'
var swiper3 = new Swiper('.now-show .ver-slide-all', {
  direction:'vertical',
  spaceBetween: 5,
  slidesPerView: 2.5,
  touchMoveStopPropagation: false,
});
$('.s-n').tap(function () {  
  $('.show-inner').css('marginLeft',0)
})
$('.s-w').tap(function () {
  $('.show-inner').css('marginLeft', '-100vw')
})
$('.ver-slide-all').swipeUp(function (event) {  
  var topHeight = -($('.introduce-all').height()*1+$('header').height()*1)+'px'
  $('header').css('marginTop',topHeight)
})
$('.ver-slide-all').swipeDown(function () {
  console.log(111111);
  $('header').css('marginTop', 0)
})

$('.footer-list>li:nth-child(1)>a').find('span').eq(1).addClass('change')
$('.footer-list>li:nth-child(1)>a').find('span').eq(0).find('svg>path').addClass('img-change')