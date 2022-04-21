import styles from '../../../styles/Home.module.css'
import Card from '../Cards/Card.js'

function SectionTwo() {
  return <section className={styles.sectionTwo}>
    <span className={styles.backgroundTitle}><span className={styles.desktopOnly}>Last </span>episodes</span>
    <span className={styles.blueCircle}></span>
    <section>
      <h2 className={`${styles.title} ${styles.titleLarge}`}>Last <br className={styles.mobileOnly} />episodes</h2>
      <span className={styles.blueLine}></span>
      <div className={styles.episodeFilter}>
        <a>All</a>
        <a>Development</a>
        <a>Design</a>
        <a>Project management</a>
      </div>
      <div className={styles.episodeCards}>
        <Card title="Data structures" />
        <Card title="Tech to watch in 2022" />
        <Card title="How to get better at problem solving" />
        <Card title="New css logical properties" />
      </div>
      <a className={styles.outlinedBtn}>View more</a>
    </section>
  </section>
}

export default SectionTwo