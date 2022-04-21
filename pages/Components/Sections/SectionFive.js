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
            <p>Subscribe to our newsletter, to be always aware of our company events.<br />We build the most powerful and flexible tools for internet commerce.</p>
            <div className={styles.subscribeInput}>
                <FontAwesomeIcon className={styles.faEnvelope} icon={faEnvelope} />
                <input type="email" placeholder="Type your email" />
                <button>send</button>
            </div>
            <br />
            <br />
            <span className={styles.divider}></span>
            <div className={styles.ValtechLogoWhite}>
                <Image src={ValtechLogoWhite} alt="Young man" quality="100" layout='responsive' objectFit='contain' />
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