const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');
const starShape = document.querySelector('.frame');
const copyYear = document.querySelector('footer').innerHTML = `<p>&copy; Copyright ${new Date().getFullYear()}</p>`;
const socialIcons = document.querySelector('.social-icons').innerHTML = socialIconsF();

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

document.addEventListener('click', printMousePos);

function printMousePos(e) {
    document.querySelector('.frame').style.visibility = 'visible';
    document.querySelector('.frame').style.top = Math.max(50, (Math.min((document.body.scrollHeight-128),(e.pageY-64)))) +'px';
    document.querySelector('.frame').style.left = Math.min((document.body.scrollWidth-128),(e.pageX-64)) +'px';
}



function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
};

function showStarF () {
    
}

function socialIconsF() {
    return (
        `<a href="https://twitter.com/Greater73527025"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://www.facebook.com/vladimir.nosikov"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="www.linkedin.com/in/vladimir-nosikov-b0a2aa206"><i class="fab fa-linkedin-in fa-2x"></i></a>
        <a href="https://github.com/Dominic-N1"><i class="fab fa-github fa-2x"></i></a>`
    )
};

let a = '';
let d = `<div class="triangle-1"></div><div class="c"></div>`;
for (let i = 1; i <= 4; i++) {
  d += `<div class="hill-bg-${i}"></div><div class="hill-fgg-${i}"></div>`
};
for (let i = 1; i <= 12; i++) {
  a += `<div class="line-${i}"></div>`
};
document.querySelector(".frame").innerHTML = d
document.querySelector(".triangle-1").innerHTML = a;
