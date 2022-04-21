import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import person2 from '../../../public/person2.png'
import oval3 from '../../../public/oval3.png'
import oval4 from '../../../public/oval4.png'
import oval5 from '../../../public/oval5.svg'
import rectangleLines from '../../../public/rectangle_lines.svg'

function SectionFour() {
  return <section className={styles.sectionFour}>
    <section>
      <div>
        <div className={styles.person2}>
          <Image src={person2} alt="Young woman" quality="100" layout='responsive' objectFit='contain' />
        </div>
        <div className={styles.personTitle}>
          <p>Fake Company CTO</p>
          <span className={styles.blueLine}></span>
          <h2>Danny<br />Baker</h2>
        </div>
        <div className={styles.oval3}>
          <Image src={oval3} alt="design element" quality="100" layout='responsive' objectFit='contain' />
        </div>
        <div className={styles.rectangleLines}>
          <Image src={rectangleLines} alt="design element" quality="100" layout='responsive' objectFit='contain' />
        </div>
      </div>
      <div>
        <span className={styles.backgroundTitle}>Next</span>
        <h2>Coming next</h2>
        <p>Body placeholder for text paragraph. A paragraph is a self-contained unit of text dealing with a particular point or idea is a self-contained unit of text dealing with a particular point or idea.</p>
        <div className={styles.oval4}>
          <Image src={oval4} alt="design element" quality="100" layout='responsive' objectFit='contain' />
        </div>
        <div className={styles.mobileOnly}>
          <div className={styles.oval5}>
            <Image src={oval5} alt="design element" quality="100" layout='responsive' objectFit='contain' />
          </div>
        </div>
        <div className={styles.rectangleLines}>
          <Image src={rectangleLines} alt="design element" quality="100" layout='responsive' objectFit='contain' />
        </div>
      </div>
    </section>
  </section>
}

export default SectionFour