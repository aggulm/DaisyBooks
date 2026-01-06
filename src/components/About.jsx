import React from 'react'
import aboutStyles from '../assets/dummystyles'
import { apstats } from '../assets/dummydata'
import AboutUsImg from '../assets/AboutUsImg.jpg'
const About = () => {
    return (
        <div className={aboutStyles.container}>
            <section className={aboutStyles.section}>
                <div className={aboutStyles.innerContainer}>
                    <div className={aboutStyles.headingWrapper}>
                        <div className='relative inline-block'>
                            <h1 className={aboutStyles.heading}>
                                Hekayələrlə Gələcəyi Qururuq
                            </h1>
                            <div className={aboutStyles.underline} />
                        </div>
                        <p className={aboutStyles.subText}>
                            Oxu mədəniyyətinə dəyər qatmaq üçün çalışırıq.
                            Təsəvvürü yeniliklə birləşdirərək keyfiyyətli ədəbi təcrübələr yaradırıq.
                        </p>
                    </div>
                </div>
            </section>

            <section className={aboutStyles.aboutSection}>
                <div className={aboutStyles.innerContainer}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        <div className={aboutStyles.aboutTextSection}>
                            <div className={aboutStyles.aboutHeadingSection}>
                                <h2 className={aboutStyles.aboutHeading}>Hekayələrə yeni yanaşma</h2>
                                <p className={aboutStyles.aboutParagraph}>Oxu təcrübəsini daha axıcı və əlçatan hala gətiririk…</p>
                            </div>


                            <div className={aboutStyles.aboutBoxGrid}>
                                <div className={aboutStyles.aboutBox}>
                                    <h4 className={aboutStyles.aboutBoxHeading}>Fəaliyyət İstiqamətimiz</h4>
                                    <p className={aboutStyles.aboutBoxText}>Oxumağı sevən insanları bir araya gətirən, rahat və əlçatan bir kitab platforması olmaq...</p>
                                </div>

                                <div className={aboutStyles.aboutBox}>
                                    <h4 className={aboutStyles.aboutBoxHeading}>Nə üçün Buradayıq</h4>
                                    <p className={aboutStyles.aboutBoxText}>Oxu mədəniyyətini dəstəkləmək və hekayələrə dəyər qatmaq...</p>
                                </div>
                            </div>
                        </div>

                        <div className={aboutStyles.aboutImageWrapper}>
                            <img src={AboutUsImg} alt="Haqqımızda" className={aboutStyles.aboutImage} />
                            <div className={aboutStyles.aboutOverlay} />

                            <div className={aboutStyles.aboutCaption}>
                                <h3 className={aboutStyles.aboutTitle}>2026-da yeni bir başlanğıc</h3>
                                <p className={aboutStyles.aboutSubtitle}>Sözlərlə dolu bir dünya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={aboutStyles.statsSection}>
                <div className={aboutStyles.innerContainer}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {apstats.map((stat, index) => (
                            <div key={index} className={aboutStyles.statCard}>
                                <div className={aboutStyles.statIconWrapper}>
                                    <stat.icon className='h-8 w-8 text-white' />
                                </div>
                                <h3 className={aboutStyles.statValue}>{stat.value}</h3>
                                <p className={aboutStyles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About