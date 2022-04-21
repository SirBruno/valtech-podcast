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
            <div className={styles.person2}>
                <Image className={styles.person2} src={person2} alt="Young woman" quality="100" layout='responsive' objectFit='contain' />
                <div>
                    <p>Fake company CTO</p>
                    <span className={styles.blueLine}></span>
                    <h2 className={`${styles.titleLarge}`}>Danny<br />Baker</h2>
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
                <h2 className={`${styles.titleLarge}`}>coming next</h2>
                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</p>
                <div className={styles.oval4}>
                    <Image src={oval4} alt="design element" quality="100" layout='fill' objectFit='contain' />
                </div>
                <div className={styles.mobileOnly}>
                    <div className={styles.oval5}>
                        <Image src={oval5} alt="design element" quality="100" layout='responsive' objectFit='contain' />
                    </div>
                </div>
                <div className={styles.rectangleLines}>
                    <Image src={rectangleLines} alt="design element" quality="100" layout='fill' objectFit='contain' />
                </div>
            </div>
        </section>
    </section>
}

export default SectionFour