import './style.css'
import { changeTheme } from '/components/Navbar/Navbar.js';
import { Navbar } from '/components/Navbar/Navbar.js';
import { Footer } from '/components/Footer/Footer.js';
import { Home } from '/pages/Home/Home.js';
import { Contact } from '/pages/Contact/Contact.js';
import { linkPage } from '/utils/linkPage.js';

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

linkPage("#homelink", Home);
linkPage("#contactlink", Contact);

changeTheme();