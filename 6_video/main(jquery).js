var allVideos= $('.video');
var allplay =$('#play-all');
var video;

// 누구.hover(
//     function(){
//       누구한테 마우스를 올렸을 때, 할일
//     }, function(){
//       누구에게 마우스를 내렸을 때, 할일
//     }
// )

allVideos.hover(
      function(){
        video=$(this).find('video');
        video.get(0).play();
        //html요소 (body, header, div, h1, em, ...)
        //get(0) --> html요ㅗ중에서 첫번째요소를 호출
    }, function(){
        video.get(0).play();
    }
)
allVideos.hover (

)
allplay.click(function(){
    if (allplay.hasClass('on')){
        var vd =$('video');
        allplay.removeClass('on');
        $('.play-all').text(Pause-all)
        vd.get(0).play();
        vd.get(1).play();
        vd.get(2).play();

        // for(초기값; 조건문; 증가감식){
        //     실행문
        // }
        for (var i=0; i<vd.length; i++)
        {
            vd.get(i).play();
        }
    }
    else {display.addClass=('on');
         $('.play-all').text(Play-all)

    }
})

