import styles from './styles.module.css'

import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className={styles["experience__container"]}>
        <div className={styles["experience__frontend"]}>
          <h3>Frontend Development</h3>
          <div className={styles["experience__content"]}>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>HTML</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>CSS</h4>
                <small className={styles['text-light']}>Experienced</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>JS</h4>
                <small className={styles['text-light']}>Intermediate</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>Bootstrap</h4>
                <small className={styles['text-light']}>Intermediate</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>React</h4>
                <small className={styles['text-light']}>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className={styles["experience__backend"]}>
          <h3>Backend Development</h3>
          <div className={styles["experience__content"]}>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>Node JS</h4>
                <small className={styles['text-light']}>Basic</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>MongoDB</h4>
                <small className={styles['text-light']}>Basic</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>Python</h4>
                <small className={styles['text-light']}>Intermediate</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>PHP</h4>
                <small className={styles['text-light']}>Basic</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles['experience__icon']}/>
              <div>
                <h4>MySQL</h4>
                <small className={styles['text-light']}>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience