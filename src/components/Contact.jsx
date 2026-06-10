import { contactPageStyles as styles } from '../assets/dummystyles'
import ContactForm from "../components/ContactForm";
import { MapPin, Mail, Phone } from 'lucide-react'
const Contact = () => {
    return (
        <div className={styles.containerStyle}>
            <div className='container mx-auto px-4 md:px-6'>
                <div className={styles.headerStyle}>
                    <h1 className='text-4xl font-hold text-gray-800 mb-4'>Bizimlə Əlaqə</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Kitablar, sifarişlər və ya təkliflər? Bizimlə əlaqə saxlayın.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className={styles.contactFormCardStyle}>
                        <h2 className={styles.sectionHeadingStyle}>Sizə kömək etməyə hazırıq</h2>
                        <ContactForm />
                    </div>

                    <div className={styles.contactInfoCardStyle}>
                        <h2 className={styles.sectionHeadingStyle}>Əlaqə Məlumatları</h2>
                        <div className='space-y-6'>
                            <div className={styles.contactItemStyle}>
                                <MapPin className='h-6 w-6 text-[#43C6AC]' />
                                <div>
                                    <h3 className='font-medium text-gray-800 mb-1'>Ünvanımız</h3>
                                    <p className='text-gray-600'>28 May küçəsi 76, Nəsimi rayonu, Bakı</p>
                                </div>
                            </div>

                            <div className={styles.contactItemStyle}>
                                <Mail className='h-6 w-6 text-[#43C6AC]' />
                                <div>
                                    <h3 className='font-medium text-gray-800 mb-1'>Email</h3>
                                    <p className='text-gray-600'>contact@daisybooks.com</p>
                                </div>
                            </div>

                            <div className={styles.contactItemStyle}>
                                <Phone className='h-6 w-6 text-[#43C6AC]' />
                                <div>
                                    <h3 className='font-medium text-gray-800 mb-1'>Bizə Zəng Edin</h3>
                                    <p className='text-gray-600'>+994 70 545 14 41</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact