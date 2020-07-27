const TEXTVISUAL = "text__visual";
const firstText = document.querySelector(".item__text:first-child");

//  텍스트 슬라이드
function textShow() {
  const currentText = document.querySelector(".text__visual");
  if (currentText) {
    currentText.classList.remove(TEXTVISUAL);
    const nextText = currentText.nextElementSibling;
    if (nextText) {
      nextText.classList.add(TEXTVISUAL);
    } else {
      firstText.classList.add(TEXTVISUAL);
    }
  } else {
    firstText.classList.add(TEXTVISUAL);
  }
}

textShow();
setInterval(textShow, 4000);

// 넷바고정
const navbar = document.querySelector("#nav");
const navbarHeight = navbar.getBoundingClientRect().height;

function navbarFixing() {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add("navbar__scroll");
  } else {
    navbar.classList.remove("navbar__scroll");
  }
}
document.addEventListener("scroll", navbarFixing);

// 넷바 건들면 고정

// 서브메뉴
const navbarMenu = document.querySelectorAll(".navbar_menu");
const navbarSub = document.querySelector(".sub__showing");
const wrapSub = document.querySelectorAll(".wrap__sub");
const nav = document.querySelector("#nav");
const header = document.querySelector(".header");

function showSub(e) {
  const wrap = e.target.childNodes[3];
  wrapSub.forEach((sub) => {
    if (wrapSub) {
      sub.classList.add("sub__showing");
      nav.style.backgroundColor = "white";
    }
  });
}

function downSub() {
  wrapSub.forEach((sub) => {
    if (wrapSub) {
      sub.classList.remove("sub__showing");
      nav.style.backgroundColor = "white";
    }
  });
}
function showBar() {
  nav.style.backgroundColor = "white";
}
function downBar() {
  nav.style.backgroundColor = "";
}

for (i = 0; i < navbarMenu.length; i++) {
  navbarMenu[i].addEventListener("mouseover", showSub);
  navbarMenu[i].addEventListener("mouseleave", downSub);
  nav.addEventListener("mouseover", showBar);
  nav.addEventListener("mouseleave", downBar);
}

// 푸터 관련사이트 버튼
const relBtn = document.querySelector(".btn_relation");
const relList = document.querySelector(".relation__list");
const SHOWING = "showing";

function showList() {
  relList.classList.toggle(SHOWING);
}

relBtn.addEventListener("click", showList);
