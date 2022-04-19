import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faComputerMouse, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ValtechLogoBlack from '../public/valtech_logo_black.png'
import epAvatar1 from '../public/epAvatar1.png'
import rectangleLines from '../public/rectangle_lines.svg'
import playCircleFilledWhite from '../public/play_circle_filled_white.svg'
import oval from '../public/oval.svg'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
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
      <section className={styles.sectionTwo}>
        <span className={styles.backgroundTitle}>Last episodes</span>
        <span className={styles.blueCircle}></span>
        <section>
          <h2 className={styles.title}>Last episodes</h2>
          <span className={styles.blueLine}></span>
          <div className={styles.episodeFilter}>
            <a>All</a>
            <a>Development</a>
            <a>Design</a>
            <a>Project management</a>
          </div>
          <div className={styles.episodeCards}>
            <div>
              <div>
                <h3>Data structures</h3>
                <p>Jacqueline Cardozo</p>
                <span>Front end dev leader</span>
              </div>
              <div>
                <span>
                  <Image className={styles.playCircleFilledWhite} src={playCircleFilledWhite} alt="Play button" quality="100" width="40px" height="40px" />
                </span>
                <span>
                  <Image src={epAvatar1} alt="episode avatar" width="48" height="48" />
                </span>
              </div>
            </div>
            <div>
              <div>
                <h3>Tech to watch in 2022</h3>
                <p>Jacqueline Cardozo</p>
                <span>Front end dev leader</span>
              </div>
              <div>
                <span>
                  <Image className={styles.playCircleFilledWhite} src={playCircleFilledWhite} alt="Play button" quality="100" width="40px" height="40px" />
                </span>
                <span>
                  <Image src={epAvatar1} alt="episode avatar" width="48" height="48" />
                </span>
              </div>
            </div>
            <div>
              <div>
                <h3>How to get better at problem solving</h3>
                <p>Jacqueline Cardozo</p>
                <span>Front end dev leader</span>
              </div>
              <div>
                <span>
                  <Image className={styles.playCircleFilledWhite} src={playCircleFilledWhite} alt="Play button" quality="100" width="40px" height="40px" />
                </span>
                <span>
                  <Image src={epAvatar1} alt="episode avatar" width="48" height="48" />
                </span>
              </div>
            </div>
            <div>
              <div>
                <h3>new css logical properties</h3>
                <p>Jacqueline Cardozo</p>
                <span>Front end dev leader</span>
              </div>
              <div>
                <span>
                  <Image src={playCircleFilledWhite} alt="Play button" quality="100" width="40" height="40" />
                </span>
                <span>
                  <Image src={epAvatar1} alt="episode avatar" width="48" height="48" />
                </span>
              </div>
            </div>
          </div>
          <a className={styles.outlinedBtn}>View more</a>
        </section>
      </section>
    </>
  )
}
