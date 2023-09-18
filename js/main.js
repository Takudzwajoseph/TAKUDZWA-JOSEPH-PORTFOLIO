hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  const nav = document.querySelector(".nav");
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("active");
};

window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  // const menu_btn = document.querySelector('.hamburger');

  // menu_btn.addEventListener('click', function (){
  //     menu_btn.classList.toggle('is-active');

  //     if(menu_btn == 'is-active'){
  //         nav.classList.add('active')
  //     }
  // });
};
