import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ValtechLogoWhite from '../public/ValtechLogoWhite.png'
import epAvatar1 from '../public/epAvatar1.png'
import rectangleLines from '../public/rectangle_lines.svg'
import playCircleFilledWhite from '../public/play_circle_filled_white.svg'
import person1 from '../public/person1.png'
import person2 from '../public/person2.png'
import oval2 from '../public/oval2.png'
import oval3 from '../public/oval3.png'
import oval4 from '../public/oval4.png'
import oval5 from '../public/oval5.svg'
import SectionOne from './Components/SectionOne.js'

export default function Home() {
  return (
    <>
      <SectionOne />
      <section className={styles.sectionTwo}>
        <span className={styles.backgroundTitle}><span className={styles.desktopOnly}>Last </span>episodes</span>
        <span className={styles.blueCircle}></span>
        <section>
          <h2 className={styles.title}>Last <br className={styles.mobileOnly} />episodes</h2>
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
          <div className={styles.person1}>
            <Image className={styles.person1} src={person1} alt="Young man" quality="100" layout='fill' objectFit='contain' />
          </div>
        </section>
      </section>
      <section className={styles.sectionFour}>
        <section>
          <div className={styles.person2}>
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
            <div className={styles.mobileOnly}>
              <div className={styles.oval5}>
                <Image src={oval5} alt="design element" quality="100" layout='fill' objectFit='contain' />
              </div>
            </div>
            <div className={styles.rectangleLines}>
              <Image src={rectangleLines} alt="design element" quality="100" layout='fill' objectFit='contain' />
            </div>
          </div>
        </section>
      </section>
      <section className={styles.sectionFive}>
        <section>
          <span className={styles.backgroundTitle}>Subscribe</span>
          <h2>Subscribe</h2>
          <span className={styles.blueLine}></span>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
          <div className={styles.subscribeInput}>
            <FontAwesomeIcon className={styles.faEnvelope} icon={faEnvelope} />
            <input type="email" placeholder="Type your email" />
            <button>send</button>
          </div>
          <br />
          <br />
          <span className={styles.divider}></span>
          <div style={{ width: '100%', height: '40px', position: 'relative' }}>
            <Image className={styles.ValtechLogoWhite} src={ValtechLogoWhite} alt="Young man" quality="100" layout='fill' objectFit='contain' />
          </div>
          <span className={styles.blueLine}></span>
          <div className={styles.episodeFilter}>
            <a>Home</a>
            <a>The show</a>
            <a>Episodes</a>
            <a>Contact</a>
          </div>
          <p className={styles.copyrightText}>©2022 Valtech. All rights reserved.</p>
        </section>
      </section>
    </>
  )
}
