//Google Autheticator
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN3V6cpPpOrF24YvirY4i3CJU3gPzMLHM",
  authDomain: "nicolasberquez-14119.firebaseapp.com",
  projectId: "nicolasberquez-14119",
  storageBucket: "nicolasberquez-14119.appspot.com",
  messagingSenderId: "89562951613",
  appId: "1:89562951613:web:d3c2ad3cbfccea5ba2acd4",
  measurementId: "G-SCTVWV6EV6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("login").addEventListener('click',GoogleLogin);
document.getElementById("logout").addEventListener('click',GoogleLogout);

function GoogleLogin(){
  console.log("Login call");
}
function GoogleLogout(){
  console.log("Logout call");
}

// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Henr", "Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 15 métiers différents. J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 6 mois je me forme à temps plein en autodidacte aux langages Front tels que CSS, Javascript et son Framework React afin devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder."],
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();