var audio = new Audio('http://lasonotheque.org/UPLOAD/mp3/0924.mp3');
var piouu = new Audio('https://www.myinstants.com/media/sounds/teleport.mp3');

$("#carry").click(function(){
  if ($(this).hasClass("changeColor")){
    audio.play();
    setTimeout(function(){
      audio.pause();
      audio.currentTime = 0;
    }, 850);
    $(this).removeClass("changeColor")
    .addClass("reChangeColor");
  } else if ($(this).hasClass("reChangeColor")) {
    piouu.play();
    setTimeout(function(){
      piouu.pause();
      piouu.currentTime = 0;
    }, 850);

    $(this).removeClass("reChangeColor");
  } else {
    $(this).addClass('changeColor');
    audio.play();
    setTimeout(function(){
      audio.pause();
      audio.currentTime = 0;
    }, 850);
  }
})
