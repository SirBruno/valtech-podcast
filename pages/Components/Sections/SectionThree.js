import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import oval2 from '../../../public/oval2.png'
import person1 from '../../../public/person1.png'

function SectionThree() {
    return <section className={styles.sectionThree}>
    <section>
      <div>
        <div className={styles.oval2}>
          <Image src={oval2} alt="design element" quality="100" layout='responsive' objectFit='contain' />
        </div>
        <span className={styles.backgroundTitle}>About<br />the</span>
        <h2 className={`${styles.titleLarge}`}>about the show</h2>
        <span className={styles.blueLine}></span>
        <p>So they stick around, kicking out feedback and I entertain it as if I need that I had a talk with my uncle and he agreed that my privacy about the only thing I need back as if I need that I had a talk with my uncle and he agreed that my privacy about the only thing.</p>
      </div>
      <div className={styles.person1}>
        <Image className={styles.person1} src={person1} alt="Young man" quality="100" layout='responsive' objectFit='contain' />
      </div>
    </section>
  </section>
}

export default SectionThree