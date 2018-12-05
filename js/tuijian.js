document.querySelector('.now-show .ver-slide-all').style.height = $('.ver-slide-slider>a>img').height()*1*2.5+10+'px'
var swiper2 = new Swiper('.ver-slide-all', {
  direction: 'vertical',
  spaceBetween: 5,
  slidesPerView: 2.5,
  touchMoveStopPropagation: false,
});

$('.s-n').tap(function () {
  $('.show-inner').css('marginLeft', 0)
})
$('.s-w').tap(function () {
  $('.show-inner').css('marginLeft', '-100vw')
})
$('.footer-list>li:nth-child(2)>a').find('span').eq(1).addClass('change')
$('.footer-list>li:nth-child(2)>a').find('span').eq(0).find('svg>path').addClass('img-change')
var ind = 0
var imgNum = $('article>.arti-inner>ul>li>a>img').length
var nowH =0
$('.arti-inner').swipeUp(function () { 
  
 if(ind<imgNum-2){
  var height = $('article>.arti-inner>ul>li').eq(ind).height()
  nowH = -height+ nowH
  $('article>.arti-inner>ul').css('marginTop',nowH)
   ind ++
 }else if(ind === imgNum-2){
   console.log(111);
  $('article>.arti-inner>ul').css('marginTop','-23.6rem;')
 }
 console.log(nowH);
})
$('.arti-inner').swipeDown(function () { 
  console.log(nowH);
  if(ind>0){
   var height = $('article>.arti-inner>ul>li').eq(ind-1).height()
   nowH = height+ nowH
   $('article>.arti-inner>ul').css('marginTop',nowH)
    ind --
  }else{}
  console.log(height,nowH);
 })