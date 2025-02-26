import './Footer.css';
import { info } from '/data/projects.js'

export const Footer = () => `
<div>
  <ul>
    <li>
      <a href="${info.github}" target="_blank">
        <img src="/public/github_link.jpeg">
        <p>GitHub</p>
      </a>
    </li>
    <li>
      <a href="${info.linkedin}" target="_blank">
        <img src="/public/linkedin_link.png">
        <p>LinkedIn</p>
      </a>
    </li>
  </ul>
</div>
`;