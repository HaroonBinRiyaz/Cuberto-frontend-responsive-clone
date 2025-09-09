MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();
AOS.init();

let ham = document.getElementById("menu");

ham.addEventListener("click", function () {

  console.log("hello")
  openToggle();
  
})



