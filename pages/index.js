import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faComputerMouse, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ValtechLogoBlack from '../public/valtech_logo_black.png'
import epAvatar1 from '../public/epAvatar1.png'
import rectangleLines from '../public/rectangle_lines.svg'
import playCircleFilledWhite from '../public/play_circle_filled_white.svg'
import person1 from '../public/person1.png'
import person2 from '../public/person2.png'
import oval from '../public/oval.svg'
import oval2 from '../public/oval2.png'
import oval3 from '../public/oval3.png'
import oval4 from '../public/oval4.png'

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
      <section className={styles.sectionThree}>
        <section>
          <div>
            <div className={styles.oval2} style={{ width: '750px', height: '150%' }}>
              <Image src={oval2} alt="design element" quality="100" layout='fill' objectFit='contain' />
            </div>
            <span className={styles.backgroundTitle}>About<br />the</span>
            <h2>about the show</h2>
            <span className={styles.blueLine}></span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
          </div>
          <div style={{ width: '550px', height: '100%', position: 'relative' }}>
            <Image className={styles.person1} src={person1} alt="Young man" quality="100" layout='fill' objectFit='contain' />
          </div>
        </section>
      </section>
      <section className={styles.sectionFour}>
        <section>
          <div style={{ width: '550px', height: '100%', position: 'relative' }}>
            <Image className={styles.person2} src={person2} alt="Young woman" quality="100" layout='fill' objectFit='contain' />
            <div>
              <p>Fake company CTO</p>
              <span className={styles.blueLine}></span>
              <h2>Danny<br />Baker</h2>
              <div className={styles.oval3}>
                <Image src={oval3} alt="design element" quality="100" layout='fill' objectFit='contain' />
              </div>
              <div className={styles.rectangleLines}>
                <Image src={rectangleLines} alt="design element" quality="100" layout='fill' objectFit='contain' />
              </div>
            </div>
          </div>
          <div>
            <span className={styles.backgroundTitle}>Next</span>
            <h2>coming next</h2>
            <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</p>
            <div className={styles.oval4}>
              <Image src={oval4} alt="design element" quality="100" layout='fill' objectFit='contain' />
            </div>
            <div className={styles.rectangleLines}>
              <Image src={rectangleLines} alt="design element" quality="100" layout='fill' objectFit='contain' />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
