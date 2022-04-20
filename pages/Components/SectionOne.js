import Head from 'next/head'
import Image from 'next/image'
import { faComputerMouse, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Home.module.css'
import rectangleLines from '../../public/rectangle_lines.svg'
import ValtechLogoBlack from '../../public/valtech_logo_black.png'
import oval from '../../public/oval.svg'

function SectionOne() {
    return <div className={styles.container}>
    <Head>
      <title>Valtech Podcast</title>
    </Head>
    <FontAwesomeIcon className={styles.menuBtn} icon={faBars} />
    <main className={styles.main}>
      <span className={styles.backgroundTitle}>Podcast</span>
      <div className={styles.rectangleLines}>
        <Image src={rectangleLines} alt="design element" quality="100" layout='fill' objectFit='contain' />
      </div>
      <div className={styles.oval}>
        <Image src={oval} alt="design element" quality="100" layout='fill' objectFit='contain' />
      </div>
      <div>
        <div className={styles.ValtechLogoBlackContainer}>
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
}

export default SectionOne