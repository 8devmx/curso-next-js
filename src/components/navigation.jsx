import Link from 'next/link'
import styles from '@/styles/Navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <p>
        <Link href='/' className={styles.logo}>Logo</Link>
      </p>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/work'>Work</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
