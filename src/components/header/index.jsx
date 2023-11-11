import styles from './styles.module.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/mine.png'
const Header = () => {
  return (
    <header id='home'>
      <div className={styles["header__container"]}>
        <div className={styles["header__content"]}>
          <h5>Hello i'm</h5>
          <h1>Hani Abdallah</h1>
          <h5 className={styles['text-light']}>Frontend Developer</h5>
          <CTA/>
          <HeaderSocial/>
        </div>
        <div className={styles.me}>
          <img src={ME} alt="me" />
        </div>
        <a href="#home" className={styles['header__chillout']}>Taste our list</a>
      </div>
    </header>
  )
}

export default Header