window.alert("website under construction!");

/*===== MAP =====*/ 
function initMap() {
  var location = {lat: location, lng: location};
  var map = new google.maps.Map(document.getElementById('map'));
}


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('#t_name',{});
sr.reveal('.home__title',{delay: 400}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});

/*BUTTOM BUTTON*/
sr.reveal('.m_bottom',{delay: 400}); 

/*BUTTOM BUTTONS VISIBILITY*/
l_button = document.getElementById("m_left");
r_button = document.getElementById("m_right");
down = document.getElementById("m_down");

window.onscroll = function() {
  scrollFunction();
  downArrowHiding();
};

function scrollFunction() {
  if (pageYOffset >= 600) {
    l_button.style.display = "block";
    r_button.style.display = "block";
  } else {
    l_button.style.display = "none";
    r_button.style.display = "none";
  }
}

function downArrowHiding() {
  if (pageYOffset >= 20) {
    down.style.display = "none";
    down.style.display = "none";
  } else {
    down.style.display = "block";
    down.style.display = "block";
  }
}

/*TYPED JS SCRIPT*/
var typed = new Typed('.typed', {
  strings: ["Graphics Designer","App Developer","Web Developer","UI/UX Designer","CS Student","Data Scientist"],
  startDelay: 500,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

/*===== PARALLAX =====*/
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

/*===== CURSOR =====*/
/*
var cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(e){
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
var cursor__effect = document.querySelectorAll('.cursor__effect');
cursor__effect.forEach(link => {
  link.addEventListener('mouseleave', () =>{
    cursor.classList.remove('cursor__shrink');
  });
  link.addEventListener('mouseover', () =>{
    cursor.classList.add('cursor__shrink');
  });
});*/