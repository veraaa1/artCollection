var userInfo =[
  {
    userName:'阿德',
    userImg:'images/introduce/user-img.jpg',
    commentTime:'2016.08.21',
    commentCon:'挺好的！喜欢这种风格',
  },
  {
    userName: '阿美',
    userImg: 'images/introduce/user-img.jpg',
    commentTime: '2016.08.24',
    commentCon: '杨丽萍很美',
  }
]
userInfo.forEach(function (ele) {
  var li = $('<li>').html(`<img src="${ele.userImg}" alt="">
  <div class="comment-con">
    <p class="useN">${ele.userName}</p>
    <p class="useT">${ele.commentTime}</p>
    <p class="useC">${ele.commentCon}</p>
  </div>`)
  $('.com-content>ul').append(li) 
  })
  $('.come').tap(function () {
    $('.main-inner').css('marginLeft','-100vw')
    $('footer').css('display','none')
    $('main').css('height','100vh')
  })
$('.comeHere>.back').tap(function () {
   $('.main-inner').css('marginLeft', '0')
   $('footer').css('display', 'block')
   $('main').css('height', 'auto')
  })
$('.share-btn').tap(function () {  
  var bot = $('footer').height()
  console.log(bot);
  $('.share').css('bottom',bot)
})
$('.pinglun').tap(function () {  
  $('.main-inner').css('marginLeft', '-200vw')
  $('footer').css('display', 'none')
  $('main').css('height', '100vh')
  $('.choose').css('display', 'none')
})
$('.comment-title>.back').tap(function () {
  $('.main-inner').css('marginLeft', '0')
  $('footer').css('display', 'block')
  $('main').css('height', 'auto')
})
$('.share-off').tap(function () {
  $('.share').css('bottom', '-6.21rem')
})
$('#comment').focus(function(){
  $('.choose').css('display','block')
})
$('body .footer-list>li:first-child').tap(function () {  
$(this).find('a>span:first-child>svg>path').css('fill','#d52315')
})