$('.search').tap(function () {
  $('.main-inner').css('marginLeft', '-100vw')
  $('header').css('display', 'none')
  $('footer').css('display', 'none')
}
)
$('.search-off').tap(function () {
  $('.main-inner').css('marginLeft', '0')
  $('header').css('display', 'flex')
  $('footer').css('display', 'block')

})