// // 배열
// var num = 10;
// console.log(num)

// var a = ['0', '1', '2', '3']
// // 배열요소(item) 각각 할 일
// //배열.foreach (할일, 기능(){실행문});
// 배열.foreach(function(item_){
//     console.log(item + "안녕")
// });

var allVideos = document.querySelectorAll('.video');
var allplay = document.querySelector('#play-all');

allVideos.forEach(function(v){
    v.addEventListener('mouseover', function(){
        var video = v.querySelector('video')
        video.play();
    })

    v.addEventListener('mouseleave',function(){
        var video = v.querySelector('video')
        video.pause();
    })
})

allplay.addEventListener('click',function(){
    if (allplay.classList.contains('on')){
        console.log('ok')
        allplay.classList.remove('on');
        document.querySelector('.play-all').innerHTML = "pause-all"
        allVideos.forEach(function(v){
            var video = v.querySelector('video');
            video.play();
        })
    }
    else {
        console.log('no')
        allplay.classList.add('on')
        document.querySelector('.play-all').innerHTML="play-all"
        allVideos.forEach(function(v){
            var video = v.querySelector('video');
            video.pause();
        })
    }

    console.log('ok')
})