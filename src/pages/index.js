import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
        <div className={styles.center}>
          <Head>
            <title>GAB Bildung</title>
            <meta name='keywords' content='next.js, react' />
          </Head>

          <h1>Willkommen zur GAB Bildung</h1>
          <Link href="artikel">
            Artikel
          </Link>
        </div>

  )
}

