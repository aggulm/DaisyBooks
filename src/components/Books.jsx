import React, { useState } from 'react'
import { ShoppingBag, Plus, Minus, Star, Search } from "lucide-react"
import { useLocation } from "react-router-dom"
import { booksPageStyles as styles } from '../assets/dummystyles'
import { useCart } from '../CartContext/CartContext'

import bestseller1 from "../assets/bestseller1.webp";
import bestseller2 from "../assets/bestseller2.webp";
import bestseller3 from "../assets/bestseller3.webp";
import bestseller5 from "../assets/bestseller5.webp";
import bestseller6 from "../assets/bestseller6.webp";

import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.webp";
import book3 from "../assets/book3.webp";
import book4 from "../assets/book4.webp";
import book5 from "../assets/book5.webp";
import book6 from "../assets/book6.webp";
import book7 from "../assets/book7.webp";
import book8 from "../assets/book8.webp";
import book9 from "../assets/book9.webp";
import book10 from "../assets/book10.webp";
import book11 from "../assets/book11.webp";
import book12 from "../assets/book12.webp";
import book13 from "../assets/book13.webp";
import book14 from "../assets/book14.webp";
import book15 from "../assets/book15.webp";
import book16 from "../assets/book16.webp";

import SecilmisNesrler1 from "../assets/SecilmisNesrler1.jpg";
import SecilmisNesrler2 from "../assets/SecilmisNesrler2.png";
import SecilmisNesrler3 from "../assets/SecilmisNesrler3.jpg";
const Books = () => {
    const { cart, dispatch } = useCart()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const searchFromURL = queryParams.get("search") || ""

    const [searchTerm, setSearchTerm] = useState(searchFromURL)
    const [sortBy, setSortBy] = useState('title')
    const [filterCategory, setFilterCategory] = useState('all')

    const books = [
        { id: 1, image: book1, title: "Mir Cəfər Bağırov kim idi?", author: "Elçin", price: 8.49, rating: 4.1, category: "Tarix", description: "“Mir Cəfər Bağırov kim idi?” – xalq yazıçı və ictimai xadim Elçinin müəllifi olduğu bu fundamental əsər, Sovet Azərbaycanının 20 illik repressiv epoxasına rəhbərlik etmiş bir şəxsin – Mir Cəfər Bağırovun siyasi taleyini, şəxsiyyət komplekslərini və tarixdəki yerini araşdırır." },
        { id: 2, image: book2, title: "Cek Manın uğur prinsipləri", author: "Şixa Şarma", price: 5.91, rating: 4, category: "Motivasiya", description: "Cek Manın sadə ingilis dili müəllimliyindən qlobal biznes maqnatına çevrilməsini, şəxsi həyat təcrübələri əsasında formalaşmış, hər kəsin anlaya biləcəyi uğur prinsipləri ilə izah edən ilhamverici bir kitab" },
        { id: 3, image: book3, title: "Altı qarğa", author: "Li Barduqo", price: 16.0, rating: 4.5, category: "Fantastika", description: "Kriminal düha Kaz Brekkerin rəhbərliyində altı təhlükəli fərdin birləşərək Buz Sarayında mümkün olmayan bir soyğunu həyata keçirməyə çalışdığı, xəyanət, magiya və yüksək risklərlə dolu nəfəs kəsən bir macəra." },
        { id: 4, image: book4, title: "Dəli Kür", author: "İsmayıl Şıxlı", price: 11.04, rating: 4, category: "Tarix", description: "Böyük Azərbaycan yazıçısı İsmayıl Şıxlının geniş oxucu kütləsinin rəğbətini qazanmış və XIX əsrdə baş verən mürəkkəb tarixi proseslərin Azərbaycan xalqının həyatında əmələ gətirdiyi əsaslı dəyişiklikləri realistcəsinə göstərən bir əsərdir." },
        { id: 5, image: book5, title: "Hər şey həmişə mükəmməldir", author: "Fransua Löme", price: 10.15, rating: 4.3, category: "Fəlsəfə", description: "Fransua Lömenin bu əsəri həyatın dərin mənasını araşdıran və insanın daxili dünyasına işıq salan fəlsəfi bir romandır. " },
        { id: 6, image: book6, title: "Dağ başındakı oğlan", author: "Con Boyn", price: 10.17, rating: 4.2, category: "Tarix", description: "Nasist ideologiyasının təsiri altında böyüyən Pyero adlı bir uşağın müharibə fonunda dostluq, vicdan və sədaqət arasında etdiyi ağır seçimlər vasitəsilə insan ruhunda baş verən ən dərin faciəni göstərən sarsıdıcı hekayə." },
        { id: 7, image: book7, title: "Diktatorun xanımı", author: "Freya Berri", price: 16.92, rating: 4.3, category: "Sosial", description: "“Diktatorun xanımı” Freya Berrinin jurnalist təcrübəsindən qaynaqlanan müşahidələri əsasında, dünyanın ən güclü liderlərinin xanımlarının gizli və mürəkkəb həyatını bədii dillə təsvir edən təsirli romandır." },
        { id: 8, image: book8, title: "Atama məktub", author: "Frans Kafka", price: 3.37, rating: 3, category: "Esse", description: "“Atama məktub” əsəri Frans Kafkanın atasına ünvanladığı, lakin göndərmədiyi məktubdur." },
        { id: 9, image: book9, title: "Yüksək effektli insanların 7 vərdişi", author: "Stephen R.Covey", price: 13.59, rating: 3.7, category: "Motivasiya", description: "Bu kitab təbiətin onlara verdiyi potensialı maksimum reallaşdırmağa can atan insanlar üçün əsl yol xəritəsidir." },
        { id: 10, image: book10, title: "Albalı bağı", author: "Anton Çexov", price: 3.34, rating: 4.6, category: "Klassika", description: "“Albalı bağı” dəyişən dövr qarşısında keçmişə bağlı qalan bir ailənin qaçılmaz itkilərini və zamanın amansızlığını təsvir edən klassik dramdır." },
        { id: 11, image: book11, title: "Üç bacı", author: "Hizer Morris", price: 14.24, rating: 3.9, category: "Tarix", description: "Bütün çətinliklərə baxmayaraq, dəhşətli aclığa, qəddar rəftara dözərək nasist Almaniyasının ən qorxunc ad çıxarmış ölüm düşərgəsindən salamat çıxan slovakiyalı üç bacının gerçək həyat hekayəsinə əsaslanan, sevgi və yaşamaq istəyindən bəhs edən ürəkdağlayan romandır." },
        { id: 12, image: book12, title: "Yuxugörmə sənəti", author: "Karlos Kastaneda", price: 13.49, rating: 3.8, category: "Fəlsəfə", description: "Karlos Kastaneda “Yuxugörmə sənəti” adlı kitabında yuxular üzərində nəzarəti ələ almağın, onları idarə və dərk etməyin üsullarından bəhs edir." },
        { id: 13, image: book13, title: "İtmiş kitab dükanı", author: "İvi Vudz", price: 13.49, rating: 4.7, category: "Roman", description: "“İtmiş kitab dükanı” kitabların ətrafında birləşən üç taleyi və azadlıq axtarışını təsirli şəkildə nəql edən romandır." },
        { id: 14, image: book14, title: "Rus gəmisində intihar", author: "Zahir Məlikli", price: 16.69, rating: 4.8, category: "Sosial", description: "Birinci şəxsin dilindən nəql olunan bu avtobioqrafik-sosial roman milli dəyərlər, əxlaq və insan taleləri fonunda xeyirlə şərin mübarizəsini müxtəlif tarixi dövrlər kontekstində əks etdirir." },
        { id: 15, image: book15, title: "Alov sütunu", author: "Ken Follet", price: 25.59, rating: 3.8, category: "Tarix", description: "Kraliça I Yelizavetanın hakimiyyətinin ilk illəri fonunda iki gəncin sevgisi və siyasi çəkişmələr ətrafında cərəyan edən tarixi roman." },
        { id: 16, image: book16, title: "Təslimiyyət", author: "Mişel Uelbek", price: 9.44, rating: 4.1, category: "Sosial", description: "2022-ci ildə Fransada siyasi və mədəni çevriliş fonunda Avropanın islama təslim olması ideyasını tənha bir ədəbiyyat müəlliminin taleyi üzərindən araşdıran siyasi-fantastik roman." },
        { id: 17, image: bestseller1, title: "Ağlasığmazlıq dağına qalxmaq", author: "Richard Dawkins", price: 14.44, rating: 4.2, category: "Elm", description: "Təkamülün möcüzəvi mexanizmini sadə və təsirli şəkildə izah edən elmi səyahət kitabı." },
        { id: 18, image: bestseller2, title: "Sevgili", author: "Toni Morrison", price: 13.39, rating: 4.8, category: "Klassika", description: "Köləliyin analıq üzərində dağıdıcı təsirini və azadlıq eşqini təsirli şəkildə danışan roman." },
        { id: 19, image: bestseller3, title: "Şəkər Portağalı", author: "Jose Mauro De Vasconcelos", price: 8.49, rating: 5, category: "Klassika", description: "Uşaqlığın saf baxışı ilə ağrılı həyat həqiqətlərindən danışan təsirli avtobioqrafik povest." },
        { id: 20, image: bestseller5, title: "Şeytanı aldatmaq", author: "Napoleon Hill", price: 8.49, rating: 4.9, category: "Motivasiya", description: "Qorxu və daxili maneələri aşaraq uğura aparan yeddi prinsipi açıqlayan ilhamverici kitab." },
        { id: 21, image: bestseller6, title: "Gündəlik İlham - Ferrarisini Satmış Rahibdən", author: "Robin Şarma", price: 10.17, rating: 4.5, category: "Motivasiya", description: "Gündəlik ilhamverici sitatlarla daha məhsuldar və mənalı həyat qurmağa çağıran motivasiya kitabı." },
        { id: 22, image: SecilmisNesrler1, title: "Atomik vərdişlər", author: "James Clear", price: 11.69, rating: 4.7, category: "Motivasiya", description: "Kiçik vərdişlərin böyük və qalıcı dəyişikliklər yaratma gücünü göstərən ilhamverici kitab." },
        { id: 23, image: SecilmisNesrler2, title: "İndinin gücü", author: "Eckhart Tolle", price: 8.49, rating: 4.8, category: "Fəlsəfə", description: "İndinin gücü ilə zehni sakitləşdirib həyatına nəzarəti öyrədən kitab." },
        { id: 24, image: SecilmisNesrler3, title: "Parfümer", author: "Patrik Züskind", price: 10.74, rating: 5, category: "Klassika", description: "XVIII əsr Fransasında əcaib Qrenuyun dünyanı sarsıdan hekayəsi." },
    ]

    const isInCart = (id) => cart?.items?.some(item => item.id === id && item.source === "booksPage")
    const getCartQuantity = (id) => cart?.items?.find(item => item.id === id && item.source === "booksPage")?.quantity || 0

    const handleAddToCart = (book) => dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1, source: "booksPage" } })
    const handleIncrement = (id) => dispatch({ type: "INCREMENT", payload: { id, source: "booksPage" } })
    const handleDecrement = (id) => dispatch({ type: "DECREMENT", payload: { id, source: "booksPage" } })

    const filteredBooks = books.filter(book => {
        const matchCtg = filterCategory === 'all' || book.category === filterCategory
        const lowerSearch = searchTerm.toLowerCase()
        const matchSearch = searchTerm === "" || book.title.toLowerCase().includes(lowerSearch) || book.author.toLowerCase().includes(lowerSearch)
        return matchCtg && matchSearch
    })

    const sortBooks = [...filteredBooks].sort((a, b) => {
        switch (sortBy) {
            case "price-low": return a.price - b.price
            case "price-high": return b.price - a.price
            case "rating": return b.rating - a.rating
            default: return a.title.localeCompare(b.title, undefined, { sensitivity: 'base', numeric: true })
        }
    })

    const categories = ['all', ...new Set(books.map(book => book.category).filter(Boolean))]

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerWrapper}>
                    <h1 className={styles.headerTitle}>
                        Kitablar aləmi
                    </h1>
                    <p className={styles.headerSubtitle}>
                        Müxtəlif janrlardan seçilmiş kitablarla öz oxu yolunuzu tapın.
                    </p>
                </div>

                <div className={styles.searchWrapper}>
                    <div className={styles.searchInputWrapper}>
                        <div className={styles.searchIconWrapper}>
                            <Search className='h-5 w-5 md:h-6 md:w-6 text-gray-400 group-hover group-focus-within:text-[#43C6Ac]' />
                        </div>

                        <input type="text" placeholder='Başlıq və Müəllif üzrə Axtar'
                            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput} />
                    </div>

                    <div className={styles.filterRow}>
                        <div className={styles.selectGroup}>
                            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}
                                className={styles.selectBox}>
                                {categories.map((category) => (
                                    <option value={category} key={category}>
                                        {category === 'all' ? 'Bütün kateqoriyalar' : category}
                                    </option>
                                ))}
                            </select>

                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                                className={styles.selectBox}>
                                <option value="title">Başlığa görə sırala</option>
                                <option value="price-low">Qiymət (artan)</option>
                                <option value="price-high">Qiymət (azalan)</option>
                                <option value="rating">Ən çox bəyənilənlər</option>
                            </select>
                        </div>

                        <div className={styles.resultText}>
                            {sortBooks.length} nəticə göstərilir
                        </div>
                    </div>
                </div>

                <div className={styles.booksGrid}>
                    {sortBooks.map(book => {
                        const inCart = isInCart(book.id)
                        const qty = getCartQuantity(book.id)

                        return (
                            <div key={book.id} className={styles.bookCard}>
                                <div className={styles.imageWrapper}>
                                    <img src={book.image} alt={book.title} className={styles.imageStyle} />
                                </div>

                                <h3 className={styles.title}>{book.title}</h3>
                                <p className={styles.author}>{book.author}</p>

                                <div className={styles.ratingWrapper}>
                                    {[...Array(Number.isFinite(book.rating) ? Math.floor(book.rating) : 0)].map((_, index) => (
                                        <Star className='w-4 h-4 fill-yellow-400 stroke-yellow-400' key={index} />
                                    ))}

                                    <span>({Number.isFinite(book.rating) ? book.rating.toFixed(1) : 'N/A'})</span>
                                </div>

                                <p className={styles.description}>
                                    {book.description}
                                </p>

                                <div className={styles.priceCartWrapper}>
                                    <span className={styles.price}>{book.price.toFixed(2)} AZN</span>

                                    <div className={styles.cartButtons}>
                                        {!inCart ? (
                                            <button onClick={() => handleAddToCart(book)}>
                                                <ShoppingBag className='w-5 h-5 text-white' />
                                            </button>
                                        ) : (
                                            <div className='flex items-center gap-1'>
                                                <button onClick={() => handleDecrement(book.id)}>
                                                    <Minus className='w-4 h-4 text-white' />
                                                </button>
                                                <span>{qty}</span>
                                                <button onClick={() => handleIncrement(book.id)}>
                                                    <Plus className='w-4 h-4 text-white' />
                                                </button>
                                            </div>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Books