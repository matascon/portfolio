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
    <p>I'm Mat — a developer driven by resilience, curiosity, and a constant desire to grow. Every project here reflects the lessons learned along the way: the perseverance to push through complex problems, the adaptability to embrace new technologies, and the passion for building things that truly matter.</p>
    <p>From backend architectures to full-stack applications, my work is shaped by dedication, attention to detail, and a commitment to continuous learning. I believe great software isn't just about clean code — it's about the mindset behind it: staying focused when things get tough, staying humble when they go right, and always striving for excellence.</p>
    <p>Take a look around. I hope you find something that inspires you as much as building it inspired me.</p>
    <div>
      <p id="projectslink">Explore My Portfolio</p>
    </div>
  </section>
  `;
  linkPage("#projectslink", Projects); //Antonio, si lees esto quiero que sepas que me tardé una hora y media en poner esta línea aquí y casi una hora más en comprender por qué iba aquí :')
};
