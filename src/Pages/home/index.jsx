/* ---------------------- IMAGES ----------------------*/
import logo from '../../assets/imgs/logo.png'
import cover from '../../assets/imgs/cover.png'

/* ---------------------- STYLES ----------------------*/
import styles from './styles.module.css'

export default function home() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
      </head>
      <header className={`${styles.header} d-flex justify-content-between align-items-center`}>
        <div className={`col-3`} >
          <img src={logo} alt="Brand logo"/>
        </div>
        <nav className={`d-inline-flex col-6 justify-content-end`}>
          <ul className={`${styles.nav_list} d-inline-flex`}>
            <li className={`${styles.nav_link}`}>Home</li>
            <li className={`${styles.nav_link}`}>Product</li>
            <li className={`${styles.nav_link}`}>Faq</li>
            <li className={`${styles.nav_link}`}>Contact</li>
            {/* colocar tag <a> dentro das <li> */}
          </ul>
        </nav>
       </header>
       <div className={`${styles.cover_container} col-12`}>
         <img src={cover} alt="Foods" className={`${styles.cover_img} col-12`}/>
         <div className={`${styles.cover} d-flex justify-content-center position-absolute top-50 start-50 translate-middle`}>
          <p className={`${styles.message}`}>Food app</p>
          <h1>Why stay hungry when you can order form Bella Onojie</h1>
          <p>Download the bella onoje’s food app now on</p>
         </div>
       </div>
    </div>
  )
}