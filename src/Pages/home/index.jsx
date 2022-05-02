/* ---------------------- IMAGES ----------------------*/
import logo from '../../assets/imgs/logo.png'
import Sidebar from '../../components/icons/SidebarIcon.jsx'
import cover from '../../assets/imgs/cover.png'
import cellhone from '../../assets/imgs/cellphone.png'
import phone_creat_account from '../../assets/imgs/phone_creat_account.png'
import phone_explore from '../../assets/imgs/phone_explore.png'
import phone_checkout from '../../assets/imgs/phone_checkout.png'
import bread from '../../assets/imgs/bread.png'
import Twitter from '../../components/icons/Twitter.jsx'
import Facebook from '../../components/icons/Facebook.jsx'
import Instagram from '../../components/icons/Instagram.jsx'

/* ---------------------- STYLES ----------------------*/
import styles from './styles.module.css'

export default function home() {
  return (
    <div>
      <header className={`${styles.header} d-flex justify-content-around align-items-center`}>
        <div className={`col-3`} >
          <img src={logo} alt="Brand logo" className={styles.logo_img}/>
        </div>
        <nav className={`${styles.navigation} d-none d-md-inline-flex col-6`}>
          <ul className={`${styles.nav_list} d-inline-flex justify-content-between col-12`}>
            <li className={`${styles.nav_link}`}><a href="#" className={styles.link}>Home</a></li>
            <li className={`${styles.nav_link}`}><a href="#" className={styles.link}>Product</a></li>
            <li className={`${styles.nav_link}`}><a href="#" className={styles.link}>Faq</a></li>
            <li className={`${styles.nav_link}`}><a href="#" className={styles.link}>Contact</a></li>
          </ul>
        </nav>
        <span className={`d-flex d-md-none`}><Sidebar/></span> 
       </header>
       <section className={`${styles.container} col-12`}>
         <img src={cover} alt="Foods" className={`${styles.cover_img} ${styles.img} d-lg-block d-none col-12`}/>
         <div className={`col-lg-10 col-12 d-flex justify-content-center position-absolute top-50 start-50 translate-middle`}>
          <div className={`${styles.cover_content} text-center`}>
            <p className={`${styles.food_app}`}>Food app</p>
            <h1 className={`${styles.cover_title}`}>Why stay hungry when you can order form Bella Onojie</h1>
            <p className={`${styles.cover_tutorial}`}>Download the bella onoje’s food app now on</p>
            <div className={`${styles.cover_btn_container} d-lg-flex justify-content-center`}>
              <div className={`d-blcok d-lg-inline-flex`}>
                <button type="button" className={`${styles.playstore_btn} text-center`}>Playstore</button>
              </div>
              <div className={`d-blcok d-lg-inline-flex`}>
                <button type="button" className={`${styles.app_btn} ${styles.margin_top_app_btn} text-center`}>App store</button>
              </div>
            </div>
          </div>
         </div>
       </section>
       <div className={`d-flex justify-content-center`}>
        <div className={`${styles.margin_top_phone} d-lg-block d-flex justify-content-center`}>
          <img src={cellhone} alt="Cellphones" className={`${styles.phone} `}/>
        </div>
       </div>
       <main>
         <div className={`d-flex justify-content-center`}>
            <div className={`${styles.line} border`}/>
         </div>
         <h2 className={`${styles.section_title} text-center`}>How the app works</h2>
         <section className={`${styles.section} d-lg-flex align-items-center justify-content-around`}>
           <div className={`${styles.section_container} col-12 d-lg-flex align-items-center justify-content-around`}>
            <div className={`${styles.img_container} d-flex justify-content-center`}>
              <img src={phone_creat_account} alt="Phone showing a creating account process" className={`${styles.img}`}/>
            </div>
            <div className={`${styles.content} text-center`}>
              <h4 className={`${styles.instruction}`}>Create an account</h4>
              <h3 className={`${styles.tutorial}`}>Create/login to an existing account to get started</h3>
              <p className={`${styles.description}`}>An account is created with your email and a desired password</p>
            </div>
           </div>
         </section>
         <section className={`${styles.middle_section} ${styles.section} d-lg-flex align-items-center justify-content-around`}>
           <div className={`${styles.section_container} col-12 d-lg-flex align-items-center justify-content-around flex-lg-row-reverse`}>
            <div className={`${styles.img_container} d-flex justify-content-center`}>
              <img src={phone_explore} alt="Phone showing the app home" className={`${styles.img}`}/>
            </div>
            <div className={`text-center`}>
              <h4 className={`${styles.instruction}`}>Explore varieties</h4>
              <h3 className={`${styles.tutorial}`}>Shop for your favorites meal as e dey hot.</h3>
              <p className={`${styles.description}`}>Shop for your favorite meals or drinks and enjoy while doing it.</p>
            </div>
           </div>
         </section>
         <section className={`${styles.last_section} d-lg-flex align-items-center justify-content-around`}>
           <div className={`${styles.section_container} col-12 d-lg-flex align-items-center justify-content-around`}>
            <div className={`${styles.img_container} d-flex justify-content-center`}>
              <img src={phone_checkout} alt="Phone showing the payment screen" className={`${styles.img}`}/>
            </div>
            <div className={`${styles.content} text-center`}>
              <h4 className={`${styles.instruction}`}>Checkout</h4>
              <h3 className={`${styles.tutorial}`}>When you done check out and get it delivered.</h3>
              <p className={`${styles.description}`}>When you done check out and get it delivered with ease.</p>
            </div>
           </div>
         </section>
       </main>
       <div className={`col-12 position-relative`}>
        <img src={bread} alt="Foods" className={`${styles.bread_img} ${styles.img} col-12`}/>
          <div className={`${styles.white_text} text-center position-absolute top-50 start-50 translate-middle`}>
            <h1 className={styles.download_app}>Download the app now.</h1>
            <p className={styles.infos}>Available on your favorite store. Start your premium experience now</p>
            <div className={`${styles.btn_container} d-flex justify-content-center`} >
              <button type="button" className={`${styles.playstore_btn} ${styles.download_btn} text-center`}>Playstore</button>
              <button type="button" className={`${styles.app_btn} ${styles.download_btn} ${styles.margin_left_btn} text-center`}>App store</button>
            </div>
          </div>
       </div>
           <footer className={`${styles.footer}`}>
            <div className={`d-lg-flex justify-content-between`}>
              <img src={logo} alt="Brand logo" className={`${styles.footer_img} d-none d-lg-flex`}/>
              <div className={`${styles.social_container} d-flex align-items-center justify-content-around col-lg-4`}>
                <a href="#"><span><Twitter/></span></a>  
                <a href="#"><span><Facebook/></span></a> 
                <a href="#"><span><Instagram/></span></a> 
              </div>
              <div className={`${styles.social_container} d-flex align-items-center justify-content-center`}>
                <small className={styles.copyright_text}>Copywright 2020 Bella Onojie.com</small>
              </div>
            </div>
          </footer>
    </div>
  )
}