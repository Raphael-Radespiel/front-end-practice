const hamburgerElement = document.querySelector(".header__hamburger");
const searchElement = document.querySelector(".header__search");
const headerElement = document.querySelector(".header");
const headerHamburgerButtons = document.querySelector(".header__button-container--big-screen");
let isHamburgerOpen = false;

hamburgerElement.addEventListener("click", n => {
  if(isHamburgerOpen == false){
    openBurger();
  }
  else{
    closeBurger();
  }
});

function openBurger(){
  isHamburgerOpen = true;
  hamburgerElement.querySelector("img").src = "./images/bx-x.svg";
  headerHamburgerButtons.classList.add("visible-hamburger-buttons");  
  headerElement.style.backgroundColor = 
  searchElement.style.backgroundColor = 
  hamburgerElement.style.backgroundColor = "var(--clr-grey)";
}

function closeBurger(){
  headerHamburgerButtons.classList.remove("visible-hamburger-buttons");
  isHamburgerOpen = false;
  hamburgerElement.querySelector("img").src = "./images/bx-menu.svg";
  headerElement.style.backgroundColor = 
  searchElement.style.backgroundColor = 
  hamburgerElement.style.backgroundColor = "var(--clr-primary-dark)";
}

let mediaQuery = window.matchMedia("(min-width: 75em)");

function removeHamburger(mediaQuery){
  if(mediaQuery.matches){
    closeBurger();
  }
}

mediaQuery.addEventListener("change", removeHamburger);
