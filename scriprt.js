const navBar = document.querySelector(".nav-wraper");
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const menuTablet = document.querySelector(".menu-tablet");
const navLinks = document.querySelectorAll(".js-nav-link");
const navList = document.querySelector(".nav-list");
const btnOrder = document.querySelector(".order-project-btn");
const body = document.body
// console.log(navBar);
// console.log(header);
// console.log(hamburger)
// console.log(menuTablet);
// console.log(navLinks);
// console.log(navList);

window.addEventListener("click", handlerCloseTabletMenu);
window.addEventListener("scroll", (evt) => {

  if (window.scrollY >0 ) {
      header.classList.add("active");
      btnOrder.classList.add('active')
              navList.style.visibility = "hidden";
              navList.style.opacity = "0";
  } else {
      header.classList.remove("active");
      btnOrder.classList.remove("active");
      console.log("test");

    }


});





// При клике на бургер-меню

hamburger.addEventListener("click", function () {
  // Добавляем или удаляем класс active для бургер-меню
    hamburger.classList.toggle("active");
    if (hamburger.classList.contains('active')) { 
        body.classList.toggle("body-no-scroll")
                      navList.style.visibility = "visible";
                      navList.style.opacity = "1";
    }else{ 
body.classList.toggle("body-no-scroll");
    }
  // Добавляем или удаляем класс active для навигационного меню
    navBar.classList.toggle("active");
});



menuTablet.addEventListener("click", function (evt) {
  navBar.classList.toggle("active");


  if (navBar.classList.contains("active")) {

    navList.style.visibility = "visible";
    navList.style.opacity = "1";
  } else {

    navList.style.visibility = "hidden";
    navList.style.opacity = "0";
  }
});

// Удаляем класс если клик был по ссылке

navLinks.forEach((element) =>
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    const targetId = element.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    console.log(targetId, targetSection);
    if (targetSection) {
      targetSection.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    navBar.classList.remove("active");
      hamburger.classList.remove("active");
      


  })
);

function handlerCloseTabletMenu(evt) {
  if (!navBar.contains(evt.target) && !hamburger.contains(evt.target)) {
    if (navBar.classList.contains("active")) {
      navBar.classList.remove("active");
      navList.style.visibility = "hidden";
      navList.style.opacity = "0";

    }
  }
}
