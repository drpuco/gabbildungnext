/* soll sich um das Layout der Website kümmern */
import styles from '../styles/Layout.module.css'
import Navigation from './Navigation'
import MyDropdown from './MyDropdown'

export default function Layout({children}) {
  return (
    <>
  <MyDropdown />
    <div className={styles.main}>
        {children}
    </div>
    </>
  )
}
