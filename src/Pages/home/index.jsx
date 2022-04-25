/* ---------------------- IMAGES ----------------------*/
import logo from '../../assets/imgs/logo.png'
import cover from '../../assets/imgs/cover.png'
import cellhone from '../../assets/imgs/cellphone.png'
import phone_creat_account from '../../assets/imgs/phone_creat_account.png'
import phone_explore from '../../assets/imgs/phone_explore.png'
import phone_checkout from '../../assets/imgs/phone_checkout.png'

/* ---------------------- STYLES ----------------------*/
import styles from './styles.module.css'

export default function home() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@600;700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
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
       <section className={`${styles.cover_container} col-12`}>
         <img src={cover} alt="Foods" className={`${styles.cover_img} col-12`}/>
         <div className={`${styles.cover} text-center position-absolute top-50 start-50 translate-middle`}>
          <p className={`${styles.food_app}`}>Food app</p>
          <h1 className={`${styles.cover_title}`}>Why stay hungry when you can order form Bella Onojie</h1>
          <p className={`${styles.cover_tutorial}`}>Download the bella onoje’s food app now on</p>
          <div className={`${styles.btn_container} d-flex justify-content-center`} >
            <button type="button" className={`${styles.playstore_btn}`}>Playstore</button>
            <button type="button" className={`${styles.app_btn}`}>App store</button>
          </div>
         </div>
         <img src={cellhone} alt="Cellphones" className={`${styles.phone} position-absolute top-100 start-50 translate-middle`}/>
       </section>
       <main>
         <div className={`d-flex justify-content-center`}>
            <div className={`${styles.line} border`}/>
         </div>
         <h2 className={`${styles.section_title} text-center`}>How the app works</h2>
         <section className={`${styles.section} d-flex justify-content-center align-items-center`}>
          <img src={phone_creat_account} alt="Phone showing a creating account process"/>
          <div>
            <h4 className={`${styles.instruction}`}>Create an account</h4>
            <h3 className={`${styles.tutorial}`}>Create/login to an existing account to get started</h3>
            <p className={`${styles.description}`}>An account is created with your email and a desired password</p>
          </div>
         </section>
         <section className={`${styles.section} d-flex justify-content-center align-items-center`}>
          <div>
            <h4 className={`${styles.instruction}`}>Explore varieties</h4>
            <h3 className={`${styles.tutorial}`}>Shop for your favorites meal as e dey hot.</h3>
            <p className={`${styles.description}`}>Shop for your favorite meals or drinks and enjoy while doing it.</p>
          </div>
          <img src={phone_explore} alt="Phone showing the app home"/>
         </section>
       </main>
    </div>
  )
}