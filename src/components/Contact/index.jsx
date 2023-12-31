import styles from './style.module.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e7x6us8', 'template_dyl9sqs', form.current, 'uePmIk3tIB3yDmmZ1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get To Know</h5>
      <h2>Contact Me</h2>
      <div className={styles["contact__container"]}>
        <div className={styles["contact__options"]}>
          <article className={styles["contact__option"]}>
            <MdOutlineEmail className={styles['contact__option-icon']}/>
            <h4>Email</h4>
            <a href="mailto:hanishetos4@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className={styles["contact__option"]}>
            <RiMessengerLine className={styles['contact__option-icon']}/>
            <h4>Messenger</h4>
            <a href="https://m.me/Hani.Abdallah0" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className={styles["contact__option"]}>
            <BsWhatsapp className={styles['contact__option-icon']}/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=01277121823" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="email" placeholder='Your Email' required/>
          <textarea name="message" id="textarea" placeholder='Your Message'></textarea>
          <button type="submit" className={`${styles.btn} ${styles["btn-primary"]}`}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;