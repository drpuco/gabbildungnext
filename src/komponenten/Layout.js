/* soll sich um das Layout der Website kümmern */
import styles from '../styles/Layout.module.css'
import Navigation from './Navigation'


export default function Layout({children}) {
  return (
    <>
    <Navigation />
    <div className={styles.main}>
        {children}
    </div>
    </>
  )
}
