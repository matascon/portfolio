import './Contact.css';
import { cleanPage } from '/utils/cleanPage.js';

export const Contact = () => {
  const main = document.querySelector('main');
  cleanPage(main);
  main.innerHTML = `
    <section class="contact">
      <h2>Would you like to get in touch with me?</h2>
      <p>For sure, you can do it via Gmail or WhatsApp</p>
      <ul>
        <li>
          <img src="/images/gmail_icon.png" class="gmail-button">
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=632399079" target="_blank">
            <img src="/images/whatsapp_icon.png">
          </a>  
        </li>
      </ul>
      <form class="form-gmail" action="https://formsubmit.co/tascon1010100@gmail.com" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" required>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" required>
        <label for="subject">Subject</label>
        <input type="text" name="subject" placeholder="Subject" required>
        <label for="message">Message</label>
        <textarea name="message" placeholder="Insert your message"></textarea required>
        <input type="submit" value="Send">
      </form>
    </section>
  `;
  const gmailButton = document.querySelector('.gmail-button');
  gmailButton.addEventListener("click", () => {
    deployForm();
  });
}

const deployForm = () => {
  const form = document.querySelector('.form-gmail');
  form.style.display = "flex";
  form.scrollIntoView({behavior: "smooth"});
};