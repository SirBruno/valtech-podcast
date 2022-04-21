import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { faComputerMouse, faAngleDown, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../../styles/Home.module.css'
import rectangleLines from '../../../public/rectangle_lines.svg'
import ValtechLogoBlack from '../../../public/valtech_logo_black.png'
import ValtechLogoWhite from '../../../public/ValtechLogoWhite.png'
import oval from '../../../public/oval.svg'

function SectionOne() {

  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(!menu)
  }

  return <>
    {
      menu &&
      <section className={styles.noWayThisGonWork}>
        <FontAwesomeIcon className={styles.menuBtn} icon={faX} onClick={handleClick} />
        <div className={styles.logoArea}>
          <div className={styles.ValtechLogoWhite} style={{ width: '100%', height: '40px', position: 'relative' }}>
            <Image src={ValtechLogoWhite} alt="Young man" quality="100" layout='fill' objectFit='contain' />
          </div>
          <span className={styles.blueLine}></span>
          <h3>The Podcast</h3>
        </div>
        <div className={styles.menuItems}>
          <a>Home</a>
          <a>The show</a>
          <a>Episodes</a>
          <a>Contact</a>
        </div>
      </section>
    }
    <div className={styles.container}>
      <Head>
        <title>Valtech Podcast</title>
      </Head>
      <FontAwesomeIcon className={styles.menuBtn} icon={faBars} onClick={handleClick} />
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
  </>
}

export default SectionOne