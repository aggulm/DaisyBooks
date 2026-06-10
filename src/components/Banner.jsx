import React, { useEffect, useState } from 'react'
import { container, formContainer, geometricOverlay, glassBox, headerText, inputField, inputWrapper, paragraphText, scrollText, scrollTextSection, searchButton, subHeader } from '../assets/dummystyles'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

const MOBILE_BREAKPOINT = 560


const Banner = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT)

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`)
        }
    }
    return (
        <div className={container}>
            <div className={glassBox}>
                <div className={geometricOverlay}>
                    <div className='absolute -top-10 -right-10 md:-right-20 w-48 h-48
                     md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl' />
                    <div className='absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 h-40 w-40
                     md:w-80 md:h-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl' />
                </div>

                <div className='grid ld:grid-cols-2 gap-8 md:gap-12 items-center'>
                    {/* Text Section */}
                    <div className='space-y-6 md:space-y-8'>
                        <div className='space-y-4 md:space-y-6'>
                            <h1 className={headerText}>
                                <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B5876] to-[#43C6AC]'>
                                    Dərin
                                </span>
                                <br />
                                <span className={subHeader}>
                                    Oxu Təcrübəsi
                                </span>
                            </h1>
                            <p className={paragraphText}>
                                Oxucunu düşündürən, ilhamlandıran və inkişaf etdirən seçilmiş kitab kolleksiyası.
                                Müasir zövqlər üçün formalaşdırılmış oxu təcrübəsini kəşf edin.
                            </p>
                        </div>

                        {/* Search */}
                        <form onSubmit={handleSearch} className='space-y-6 md:space-y-8'>
                            <div className={formContainer}>
                                <div className={inputWrapper}>
                                    <div className='absolute inset-0 bg-white/90 rounded-l md:rounded-xl shadow-sm' />
                                    <div className='relative flex items-center'>
                                        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder={isMobile ? "Kitab axtar…" : "Müəllif, kitab adı və ya mövzu üzrə axtar…"}

                                            className={inputField} />
                                    </div>
                                </div>

                                <button type='submit' className={searchButton}>
                                    <Search className='w-4 h-4 md:w-5 md:h-5' />
                                    <span className='sr-only'>Axtar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Texts */}
                <div className={scrollTextSection}>
                    <div className={scrollText}>
                        Seçilmiş Kitablar • Dəyərli Müəlliflər • Oxucuya Yönəlik Məzmun
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Banner