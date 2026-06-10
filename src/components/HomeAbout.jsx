import React from 'react'
import { homeAboutStyles as styles } from '../assets/dummystyles'
import HomeAboutImg from '../assets/HomeAboutImg.jpg'
import { featuredBooks, hastats } from '../assets/dummydata'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
const HomeAbout = () => {
    return (
        <div className={styles.wrapper}>
            <div className='absolute inset-0 overflow-hidden'>
                <div className={styles.bgBlur1}></div>
                <div className={styles.bgBlur2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.aboutGrid}>
                    <div className='space-y-8'>
                        <div>
                            <h2 className={styles.aboutHeader}>Ədəbiyyat Yolumuz</h2>
                            <div className={styles.underline}></div>
                        </div>

                        <p className={styles.aboutText}>
                            Ədəbiyyata olan dərin sevgidən doğan DaisyBooks, zamanla kitabsevərlər üçün ilham məkanına çevrildi.
                            Biz oxucuları düşündürən, öyrədən və onları yeni dünyalara aparan hekayələrlə bir araya gətirərək seçilmiş oxu təcrübələri təqdim edirik.
                        </p>

                        <div className={styles.statGrid}>
                            {hastats.map((stat, index) => (
                                <div className={styles.statCard} key={index}>
                                    <div className={styles.statIconWrap}>
                                        <stat.icon className={styles.statIcon} />
                                    </div>
                                    <h3 className={styles.statValue}>{stat.value}</h3>
                                    <p className={styles.statLabel}>{stat.label} </p>
                                </div>
                            ))}
                        </div>

                        <Link to='/about' className={styles.aboutButton}>
                            <span>Bizi daha yaxından tanıyın</span>
                            <ArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageGlow}></div>
                        <div className={styles.imageContainer}>
                            <img src={HomeAboutImg} alt="about image" className={styles.aboutImage} />
                        </div>
                    </div>
                </div>
                <div className='mb-1 text-center'>
                    <h2 className={styles.sectionHeader}>Əfsanəvi Əsərlər</h2>
                    <div className={styles.headerUnderline}></div>
                    <p className={styles.headerText}>
                        Ədəbiyyat bilicilərimizin xüsusən seçdikləri, diqqətəlayiq oxu tövsiyələri.
                    </p>
                </div>

                <div className={styles.bookGrid}>
                    {featuredBooks.map((book, index) => (
                        <div className={styles.bookCardWrap} key={index}>
                            <div className={styles.bookCardGlow}></div>

                            <div className={styles.bookCard}>
                                <div className={styles.bookImageWrapper}>
                                    <img src={book.image} alt={book.title} className={styles.bookImage} />
                                </div>

                                <div className={styles.bookContent}>
                                    <h3 className={styles.bookTitle}>{book.title}</h3>
                                    <p className={styles.bookAuthor}>{book.author}</p>
                                    <p className={styles.bookDesc}>{book.description}</p>

                                    <Link to='/books' className={styles.discoverLink}>
                                        <span>
                                            Kəşf edin
                                        </span>
                                        <ArrowRight className={styles.arrowSmall} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeAbout