import Link from 'next/link'
import styles from '../styles/Layout.module.css'
export default function Navigation() {
  return (
    <div class={styles.main}>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link href='/'>Startseite</Link>
            </li>
            <li class="nav-item">
                <Link href='/artikel'>Artikel</Link>
            </li>
            <li class="nav-item">
                <Link href='/artikel/hose'>Hose</Link>
            </li>
            <li class="nav-item">
                <Link href='/artikel/pullover'>Pullover</Link>
            </li>
        </ul>
    </div>
  )
}
