"use strict";
export const init = function () {
  const menuBtn = document.querySelector(".menu-btn");
  const hamburger = document.querySelector(".menu-btn_burger");
  const nav = document.querySelector(".nav");
  const menuNav = document.querySelector(".menu-nav");
  const navItems = document.querySelectorAll(".menu-nav_item");
  const copyYear = (document.querySelector(
    "footer"
  ).innerHTML = `<p>&copy; Copyright ${new Date().getFullYear()}</p>`);

  const socialIcons = (document.querySelector(".social-icons").innerHTML =
    socialIconsF());

  let showMenu = false;
  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItems.forEach((item) => item.classList.add("open"));

      showMenu = true;
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItems.forEach((item) => item.classList.remove("open"));

      showMenu = false;
    }
  }

  function socialIconsF() {
    return `<a href="https://twitter.com/Greater73527025/"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://www.facebook.com/vladimir.nosikov/"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/vladimir-nosikov-b0a2aa206/"><i class="fab fa-linkedin-in fa-2x"></i></a>
        <a href="https://github.com/Dominic-N1/"><i class="fab fa-github fa-2x"></i></a>`;
  }
};