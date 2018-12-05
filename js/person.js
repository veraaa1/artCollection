$('.footer-list>li:nth-child(4)>a').find('span').eq(1).addClass('change')
$('.footer-list>li:nth-child(4)>a').find('span').eq(0).find('svg>path').addClass('img-change')
$('.profile').tap(function () {
    $('.main-userset').css('display','block')  
    $('.main-inner').css('marginLeft','-100vw')
})
$('.main-user-header>.back').tap(function () {  
    $('.main-inner').css('marginLeft','0')
    $('.main-userset').css('display','none')  
    
})
$('.setting').tap(function(){
    $('.main-set').css('display','block')  
    $('.main-inner').css('marginLeft','-100vw')
})
$('.main-set-header>.back').tap(function () {  
    $('.main-inner').css('marginLeft','0')
    $('.main-set').css('display','none')  
    
})