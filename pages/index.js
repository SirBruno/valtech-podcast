import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faComputerMouse, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ValtechLogoBlack from '../public/valtech_logo_black.png'
import rectangleLines from '../public/rectangle_lines.svg'
import oval from '../public/oval.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.menuBtn} icon={faBars} />
      <main className={styles.main}>
        <span className={styles.backgroundTitle}>Podcast</span>
        <div className={styles.rectangleLines}>
          <Image src={rectangleLines} quality="100" layout='fill' objectFit='contain' />
        </div>
        <div className={styles.oval}>
          <Image src={oval} quality="100" layout='fill' objectFit='contain' />
        </div>
        <div>
          <div style={{ width: '100%', height: '80px', position: 'relative' }}>
            <Image className={styles.ValtechLogoBlack} src={ValtechLogoBlack} alt="Valtech logo" quality="100" layout='fill' objectFit='contain' />
          </div>
          <span className={styles.blueLine}></span>
          <h1 className={styles.title}>The podcast</h1>
          <a className={styles.blackBtn}>Listen now</a>
        </div>
      </main>
      <div className={styles.scrollIcons}>
        <FontAwesomeIcon icon={faComputerMouse} />
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  )
}
