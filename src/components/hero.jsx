import Image from 'next/image'
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__description}>
        <p className={styles.hero__services}><strong>Branding | Image making</strong></p>
        <h1 className={styles.hero__title}>Visual Designer</h1>
        <p className={styles.hero__paragraph}>This is a template Figma file, turned into code <br /> using Anima. Learn more at AnimaApp.com</p>
      </div>
      <div>
        <Image src='/images/hero.jpeg' width='486' height='564' alt='' />
      </div>
    </section>
  )
}

export default Hero
