import React from 'react'
import { footerStyles as styles } from '../assets/dummystyles'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import logoIcon from "../assets/Lottie/logoicon.json"
import { quickLinks, socialLinks } from '../assets/dummydata'
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
const Footer = () => {
    return (
        <footer className={styles.footer} >
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.logoBlock}>
                        <Link to='/' className={styles.logoLink}>
                            <Lottie
                                animationData={logoIcon}
                                loop
                                autoplay
                                className={styles.logoImg}
                            />
                            <h1 className={styles.logoText}>DaisyBooks</h1>
                        </Link >
                        <p className={styles.aboutText}>Ədəbiyyat macəralarına açılan qapınız. Kəşf edin, araşdırın və kitabların dünyasına qərq olun.</p>
                        <div className={styles.socialWrap}>
                            {socialLinks.map(({ Icon, url }, i) => (
                                <a href={url} key={i} target='_blank' className={styles.socialButton}>
                                    <Icon className={styles.socialIcon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.quickLinksBlock}>
                        <h3 className={styles.quickLinksTitle}>Sürətli Keçidlər</h3>
                        <ul className={styles.quickLinksList}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.url} className={styles.quickLinkItem}>
                                        <span className={styles.quickLinkDot}></span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.newsletterBlock}>
                        <h3 className={styles.newsletterTitle}>Yenilikləri Qaçırmayın</h3>
                        <p className={styles.newsletterText}>
                            Yeni kitablar və yalnız abunələr üçün təkliflər sizi gözləyir.
                        </p>

                        <form className={styles.formWrap}>
                            <input type="email" placeholder='Email adresinizi daxil edin' className={styles.input} />
                            <button type='submit' className={styles.button}>
                                <ArrowRight className='h-4 w-4' />
                            </button>
                        </form>
                    </div>

                    <div className={styles.contactBlock}>
                        <h3 className={styles.contactTitle}>Bizimlə Əlaqə</h3>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <MapPin className={styles.contactIcon} />
                                <span>28 May küçəsi 76, Nəsimi rayonu, Bakı</span>
                            </div>

                            <div className={styles.contactRow}>
                                <Phone className={styles.contactIconInline} />
                                <span>+994 70 545 14 41</span>
                            </div>

                            <div className={styles.contactRow}>
                                <Mail className={styles.contactIconInline} />
                                <span>contact@daisybooks.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.copyrightWrap}>
                    <p className={styles.copyrightText}>
                        &copy; {new Date().getFullYear()} DaisyBooks. Bütün hüquqlar qorunur.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer