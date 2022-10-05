export const header = function () {
  const mainFirstSectionClassName =
    document
      .querySelector<HTMLElement>("main")
      ?.querySelector<HTMLElement>("section")?.classList + "";
  const headerHTML = `
<header>
  <div class="menu-btn">
    <span class="menu-btn_burger"></span>
  </div>
  <nav class="nav">
    <ul class="menu-nav">
      <li class="menu-nav_item ${
        mainFirstSectionClassName === "home" ? "active" : ""
      }">
        <a href="index.html" class="menu-nav_link"> Home </a>
      </li>
      <li class="menu-nav_item ${
        mainFirstSectionClassName === "about" ? "active" : ""
      }">
        <a href="about.html" class="menu-nav_link"> About Me </a>
      </li>
      <li class="menu-nav_item ${
        mainFirstSectionClassName === "projects" ? "active" : ""
      }">
        <a href="projects.html" class="menu-nav_link"> My Projects </a>
      </li>
      <li class="menu-nav_item ${
        mainFirstSectionClassName === "contact" ? "active" : ""
      }">
        <a href="contact.html" class="menu-nav_link"> Contact Me </a>
      </li>
    </ul>
  </nav>
</header>
`;

  const body = document.body;

  body.insertAdjacentHTML("afterbegin", headerHTML);
};
