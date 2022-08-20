import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(`chegou aqui`)

    emailjs.sendForm('service_hjq2i5g', 'template_l0re625', form.current, 'vojhg-K7BJ_0tckgx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className="contact__options-icon" />
            <h4>Email</h4>
            <h5>renatoroessler@gmail.com</h5>
            <a href="mailto:renatoroessler@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className="contact__options-icon" />
            <h4>Linkedin</h4>
            <h5>renatoroessler</h5>
            <a href="https://br.linkedin.com/in/renato-roessler-9b0b786b" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__options-icon" />
            <h4>WhatsAPP</h4>
            <h5>54 996384949</h5>
            <a href="https://api.whatsapp.com/send?phone=+5554996384949" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" name="name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact