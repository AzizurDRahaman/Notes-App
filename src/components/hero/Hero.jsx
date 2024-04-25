/* eslint-disable react/prop-types */
import styles from './Hero.module.css'
import hero from '../../assets/background.png'
import { RiLockFill } from 'react-icons/ri'
const Hero = () => {
  const classNames =styles.hero + " " + styles.mobileHero;
  return (
    <>
      <div className= {classNames} >
        <div className={styles.description}>  
          <img src={hero} alt="hero" />
          <p>Send and receive messages without keeping your phone online.<br/>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className= {styles.encrypted}>
          < RiLockFill /> end-to-end encrypted
        </div>
      </div>
    </>
  )
}

export default Hero