


// MY INTERESTS function:

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var slideavatars = document.querySelectorAll('.slideavatar');
var slidetexts = document.querySelectorAll('.slidetext');
var buttonlinks = document.querySelectorAll('.buttonlink');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
        });
    slideavatars.forEach((slideavatar) => {
      slideavatar.classList.remove('active');
        });
    slidetexts.forEach((slidetext) => {
      slidetext.classList.remove('active');
        });
    buttonlinks.forEach((buttonlink) => {
      buttonlink.classList.remove('active');
        });

  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
  slideavatars[manual].classList.add('active');
  slidetexts[manual].classList.add('active');
  buttonlinks[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
      });
});


// music----------------
var music= document.getElementById("music");
var icon = document.getElementById("play");

icon.onclick =function(){
  if(music.paused){
    music.play();
    icon.src="./svg/pause.svg";
  }
  else{
    music.pause();
    icon.src="./svg/play.svg";
  }
  
}