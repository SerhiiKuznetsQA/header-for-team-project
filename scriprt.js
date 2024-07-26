const navBar = document.querySelector(".nav-wraper");
const header = document.querySelector("header")
const hamburger = document.querySelector(".hamburger");
const menuTablet = document.querySelector(".menu-tablet");
const navLinks = document.querySelectorAll(".js-nav-link");
const navList = document.querySelector(".nav-list");


// console.log(navBar);
// console.log(header);
// console.log(hamburger)
// console.log(menuTablet);
// console.log(navLinks);
// console.log(navList);


window.addEventListener("click", handlerCloseTabletMenu);
window.addEventListener("scroll" ,()=> {
      if (window.scrollY > 0) {
          header.classList.add("active");
          console.log(
              "test"
          );
      } else {
          header.classList.remove("active");
           console.log("test");
      }
  
})

  

  // При клике на бургер-меню
hamburger.addEventListener("click", function () {
    
     console.log("test");
    // Добавляем или удаляем класс active для бургер-меню
    hamburger.classList.toggle("active");
    // Добавляем или удаляем класс active для навигационного меню
    navBar.classList.toggle("active");
  });




// Добавляем и удаляем  класс по клику на меню на планшете
// menuTablet.addEventListener("click", function (evt) {
//              navBar.classList.toggle("active");
//              hamburger.classList.toggle("active");
//      console.log(evt.target);
   
//     if (navBar.classList.contains('active')) {
//         console.log("test");
//         navList.style.visibility = "visible";
//         navList.style.opacity = 1;
        
//     }
  
// });
menuTablet.addEventListener("click", function (evt) {
  navBar.classList.toggle("active");
//   hamburger.classList.toggle("active");

  if (navBar.classList.contains("active")) {
    console.log("Opening menu");
    navList.style.visibility = "visible";
    navList.style.opacity = "1";
  } else {
    console.log("Closing menu");
    navList.style.visibility = "hidden";
    navList.style.opacity = "0";
  }
});

// Удаляем класс если клик был по ссылке 

navLinks.forEach(element => element.addEventListener('click', (evt) => { 
    evt.preventDefault(); 
    const targetId = element.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)
    console.log(targetId, targetSection);
    if (targetSection) { 
        targetSection.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    navBar.classList.remove("active")
     console.log("test");
}));






function handlerCloseTabletMenu(evt) {
  if (!navBar.contains(evt.target) && !hamburger.contains(evt.target)) {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active");
         console.log("test");
    }
  }
}





 




