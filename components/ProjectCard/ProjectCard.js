import './ProjectCard.css'

const classProjectCard = () => {
  console.log(document.body.classList);
  if (document.body.classList.value === 'light') {
    return "project-card-light";
  } else {
    return "project-card-dark";
  }
};

export const ProjectCard = (project) => `
<div class="project-card ${classProjectCard()}">
  <img src=${project.image} alt="${project.title}">
  <div>
    <a href="${project.github}" target="_blank">
      <img src="/images/github_link.jpeg" alt="Github Icon">
    </a>
    <a href="${project.link}" target="_blank">
      <img src="/images/link.png" alt="Linkedin Icon">
    </a>
  </div>
  <div class="header">
    <h2>${project.title}</h2>
    <div>
      <a href="${project.github}" target="_blank">
        <img src="/images/github_link.jpeg" alt="Github Icon">
      </a>
      <a href="${project.link}" target="_blank">
        <img src="/images/link.png" alt="Linkedin Icon">
      </a>
    </div>
  </div>
  <div class="detail">
    <p>${project.description}</p>
    <p class="tech">${project.tech.join(' - ')}</p>
  </div>
</div>
`;