//footer
$('.footer-list>li>a').tap(function(){
  var ind = $(this).parent().index()
  console.log($(this).parent().siblings().find('a').find('span').eq(1))
   $(this).parent().siblings().find('a').find('span').removeClass('change')
  $(this).find('span').eq(1).addClass('change')
    $(this).parent().siblings().find('a').find('span').find('svg>path').removeClass('img-change')
  $(this).find('span').eq(0).find('svg>path').addClass('img-change')
})
