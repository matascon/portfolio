import './Footer.css';
import { info } from '/data/projects.js'

export const Footer = () => `
<div>
  <ul>
    <li>
      <a href="${info.github}" target="_blank">
        <img src="/images/github_link.jpeg" alt="Github Icon">
        <p>GitHub</p>
      </a>
    </li>
    <li>
      <a href="${info.linkedin}" target="_blank">
        <img src="/images/linkedin_link.png" alt="Linkedin Icon">
        <p>LinkedIn</p>
      </a>
    </li>
  </ul>
</div>
`;