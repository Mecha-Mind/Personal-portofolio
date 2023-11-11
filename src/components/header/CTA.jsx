// import CV from '../../assets/cv.pdf'
import styles from "./styles.module.css"
const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={"0"} download className={styles.btn}>Download CV</a>
      <a href="#contact" className={`${styles.btn} ${styles["btn-primary"]}`}>Let's Talk</a>
    </div>
  )
}

export default CTA