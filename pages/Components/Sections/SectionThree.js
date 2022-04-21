import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import oval2 from '../../../public/oval2.png'
import person1 from '../../../public/person1.png'

function SectionThree() {
    return <section className={styles.sectionThree}>
    <section>
      <div>
        <div className={styles.oval2} style={{ width: '750px', height: '150%' }}>
          <Image src={oval2} alt="design element" quality="100" layout='fill' objectFit='contain' />
        </div>
        <span className={styles.backgroundTitle}>About<br />the</span>
        <h2 className={`${styles.titleLarge}`}>about the show</h2>
        <span className={styles.blueLine}></span>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      </div>
      <div className={styles.person1}>
        <Image className={styles.person1} src={person1} alt="Young man" quality="100" layout='responsive' objectFit='contain' />
      </div>
    </section>
  </section>
}

export default SectionThree