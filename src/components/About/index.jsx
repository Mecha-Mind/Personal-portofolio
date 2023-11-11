import styles from './style.module.css'
import ME from '../../assets/Hani.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={styles["about__container"]}>
        <div className={styles["about__me"]}>
          <img src={ME} alt="About Me" />
        </div>
        <div className={styles["about__content"]}>
          <div className={styles["about__cards"]}>
            <article className={styles['about__card']}>
              <FaAward className={styles['about__icon']}/>
              <h5>Experience</h5>
              <small>2+ Years Work</small>
            </article>

            <article className={styles['about__card']}>
              <FiUsers className={styles['about__icon']}/>
              <h5>Clients</h5>
              <small>20+ WorldWide</small>
            </article>

            <article className={styles['about__card']}>
              <VscFolderLibrary className={styles['about__icon']}/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>I am a frontend developer with a strong foundation in HTML and CSS, and intermediate skills in JavaScript. I am a fast learner and a dedicated researcher, always striving to stay updated with the latest trends and technologies in my field. I am seeking my first job as a front-end developer to gain valuable experience and apply my skills to create beautiful and functional interfaces for users. I am committed to doing my best and making a positive impact..</p>
          <a href="#contact" className={styles["btn btn__primary"]}>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About