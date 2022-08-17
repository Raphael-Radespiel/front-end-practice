const hamburgerElement = document.querySelector(".header__hamburger");
const headerHamburgerButtons = document.querySelector(".header__button-container--big-screen");
let isHamburgerOpen = false;

hamburgerElement.addEventListener("click", n => {
  if(isHamburgerOpen == false){
    isHamburgerOpen = true;
    hamburgerElement.querySelector("img").src = "./images/bx-x.svg";
    headerHamburgerButtons.classList.add("visible-hamburger-buttons"); 
  }
  else{
    isHamburgerOpen = false;
    hamburgerElement.querySelector("img").src = "./images/bx-menu.svg";
    headerHamburgerButtons.classList.remove("visible-hamburger-buttons"); 
  }
});

let mediaQuery = window.matchMedia("(min-width: 75em)");

function removeHamburger(mediaQuery){
  if(mediaQuery.matches){
    headerHamburgerButtons.classList.remove("visible-hamburger-buttons");
    isHamburgerOpen = false;
    hamburgerElement.querySelector("img").src = "./images/bx-menu.svg";
  }
}

mediaQuery.addEventListener("change", removeHamburger);
