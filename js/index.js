var swiper = new Swiper('.guide-all',{
  pagination: {
    el: '.swiper-pagination',
  },
});
//
$('.guide-all-inner>.guide-slider:nth-child(4)').tap(function () { 
  var width = $(this).width()
  console.log(width);
  console.log($(this));
  $('.guide-all').css('marginLeft',-width)
  $('.change').css('left',-width)
})
$('.welcome').tap(function () {  
  window.location.href = 'login.html'
})