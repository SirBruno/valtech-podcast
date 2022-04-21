import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/Home.module.css'
import ValtechLogoWhite from '../../../public/ValtechLogoWhite.png'

function SectionFive() {
    return <section className={styles.sectionFive}>
        <section>
            <span className={styles.backgroundTitle}>Subscribe</span>
            <h2 className={`${styles.titleLarge}`}>Subscribe</h2>
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
}

export default SectionFive