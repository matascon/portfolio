import './Home.css';
import { cleanPage } from '/utils/cleanPage.js';
import { linkPage } from '/utils/linkPage.js';
import { Projects } from '/pages/Projects/Projects.js'

export const Home = () => {
  const main = document.querySelector('main');
  cleanPage(main);
  main.innerHTML = `
  <section class="home">
    <p>Hello World, I'm</p>
    <h1>Mateo Tascon</h1>
    <p>I am currently a Full Stack Development student at Prometeo by thePower. I have been coding since I was 14 years old when I first studied electronics in school, programming with Arduino and assembler. Later, I realized that I was born to code when I joined 42Madrid, as it gave me the opportunity to experiment with new programming languages such as C, C++, and Java. I also gained significant experience by working on projects with my peers at the center. Now, I enjoy creating interactive apps using HTML, CSS, and JavaScript. I give my best every second while coding. In simple terms, I am truly passionate about the programming world.</p>
    <div>
      <p id="projectslink">Explore My Portfolio</p>
    </div>
  </section>
  `;
  linkPage("#projectslink", Projects); //Antonio, si lees esto quiero que sepas que me tardé una hora y media en poner esta línea aquí y casi una hora más en comprender por qué iba aquí :')
};
