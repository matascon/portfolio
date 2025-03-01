import './Navbar.css'

export const changeTheme = () => {
  const themeBtn = document.querySelector('#themeBtn');
  themeBtn.addEventListener("click", () => {
    const navPLight = document.querySelectorAll('nav p');
    navPLight.forEach((element) => {
      element.classList.toggle("nav-p-light");
    })
    const navButtonSwitchLight = document.querySelector('nav button > div');
    navButtonSwitchLight.classList.toggle("nav-button-switch-light");
    const  footerIconLight = document.querySelectorAll('footer img');
    footerIconLight.forEach((element) => {
      element.classList.toggle("footer-icon-light");
    })
    let projectCard;
    if (projectCard = document.querySelectorAll('.project-card')) {
      projectCard.forEach((card) => {
        if (card.classList.contains("project-card-dark")) {
          card.classList.replace("project-card-dark", "project-card-light");
        } else {
          card.classList.replace("project-card-light", "project-card-dark");
        }
      });
    }
    document.body.classList.toggle("light");
  });
};

export const Navbar = () => `
<nav>
  <h2>Mateo Tascon</h2>
  <ul>
    <li>
      <p id="homelink">Home</p>
    </li>
    <li>
      <p id="contactlink">Contact</p>
    </li>
    <li>
      <button id="themeBtn">
        <img src="/images/sun.png" alt="Sun Icon">
        <img src="/images/moon.png" alt="Moon Icon">
        <div><div>
      </button>
    </li>
  </ul>
</nav>
`;