import { BookOpen, Award, Users, Home, Info, Mail, Star } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import bestseller1 from "./bestseller1.webp";
import bestseller2 from "./bestseller2.webp";
import bestseller3 from "./bestseller3.webp";
import bestseller5 from "./bestseller5.webp";
import bestseller6 from "./bestseller6.webp";

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

const books = [
  {
    id: 1,
    title: "Mir Cəfər Bağırov kim idi?",
    author: "Elçin",
    price: 8.49,
    description:
      "“Mir Cəfər Bağırov kim idi?” – xalq yazıçı və ictimai xadim Elçinin müəllifi olduğu bu fundamental əsər, Sovet Azərbaycanının 20 illik repressiv epoxasına rəhbərlik etmiş bir şəxsin – Mir Cəfər Bağırovun siyasi taleyini, şəxsiyyət komplekslərini və tarixdəki yerini araşdırır.",
    image: book1,
  },

  {
    id: 2,
    title: "Cek Manın uğur prinsipləri",
    author: "Şixa Şarma",
    price: 5.91,
    description:
      "Cek Manın sadə ingilis dili müəllimliyindən qlobal biznes maqnatına çevrilməsini, şəxsi həyat təcrübələri əsasında formalaşmış, hər kəsin anlaya biləcəyi uğur prinsipləri ilə izah edən ilhamverici bir kitab",
    image: book2,
  },

  {
    id: 3,
    title: "Altı qarğa",
    author: "Li Barduqo",
    price: 16.0,
    description:
      "Kriminal düha Kaz Brekkerin rəhbərliyində altı təhlükəli fərdin birləşərək Buz Sarayında mümkün olmayan bir soyğunu həyata keçirməyə çalışdığı, xəyanət, magiya və yüksək risklərlə dolu nəfəs kəsən bir macəra.",
    image: book3,
  },

  {
    id: 4,
    title: "Dəli Kür",
    author: "İsmayıl Şıxlı",
    price: 11.04,
    description:
      "Böyük Azərbaycan yazıçısı İsmayıl Şıxlının geniş oxucu kütləsinin rəğbətini qazanmış və XIX əsrdə baş verən mürəkkəb tarixi proseslərin Azərbaycan xalqının həyatında əmələ gətirdiyi əsaslı dəyişiklikləri realistcəsinə göstərən bir əsərdir.",
    image: book4,
  },

  {
    id: 5,
    title: "Hər şey həmişə mükəmməldir",
    author: "Fransua Löme",
    price: 10.15,
    description:
      "Fransua Lömenin bu əsəri həyatın dərin mənasını araşdıran və insanın daxili dünyasına işıq salan fəlsəfi bir romandır. ",
    image: book5,
  },

  {
    id: 6,
    title: "Dağ başındakı oğlan",
    author: "Con Boyn",
    prince: 10.17,
    description:
      "Nasist ideologiyasının təsiri altında böyüyən Pyero adlı bir uşağın müharibə fonunda dostluq, vicdan və sədaqət arasında etdiyi ağır seçimlər vasitəsilə insan ruhunda baş verən ən dərin faciəni göstərən sarsıdıcı hekayə.",
    image: book6,
  },

  {
    id: 7,
    title: "Diktatorun xanımı",
    author: "Freya Berri",
    price: 16.92,
    description:
      "“Diktatorun xanımı” Freya Berrinin jurnalist təcrübəsindən qaynaqlanan müşahidələri əsasında, dünyanın ən güclü liderlərinin xanımlarının gizli və mürəkkəb həyatını bədii dillə təsvir edən təsirli romandır.",
    image: book7,
  },

  {
    id: 8,
    title: "Atama məktub",
    author: "Frans Kafka",
    price: 3.37,
    description:
      "“Atama məktub” əsəri Frans Kafkanın atasına ünvanladığı, lakin göndərmədiyi məktubdur.",
    image: book8,
  },

  {
    id: 9,
    title: "Yüksək effektli insanların 7 vərdişi",
    author: "Stephen R.Covey",
    price: 13.59,
    description:
      "Bu kitab təbiətin onlara verdiyi potensialı maksimum reallaşdırmağa can atan insanlar üçün əsl yol xəritəsidir.",
    image: book9,
  },

  {
    id: 10,
    title: "Albalı bağı",
    author: "Anton Çexov",
    price: 3.34,
    description:
      "“Albalı bağı” dəyişən dövr qarşısında keçmişə bağlı qalan bir ailənin qaçılmaz itkilərini və zamanın amansızlığını təsvir edən klassik dramdır.",
    image: book10,
  },

  {
    id: 11,
    title: "Üç bacı",
    author: "Hizer Morris",
    price: 14.24,
    description:
      "Bütün çətinliklərə baxmayaraq, dəhşətli aclığa, qəddar rəftara dözərək nasist Almaniyasının ən qorxunc ad çıxarmış ölüm düşərgəsindən salamat çıxan slovakiyalı üç bacının gerçək həyat hekayəsinə əsaslanan, sevgi və yaşamaq istəyindən bəhs edən ürəkdağlayan romandır.",
    image: book11,
  },

  {
    id: 12,
    title: "Yuxugörmə sənəti",
    author: "Karlos Kastaneda",
    price: 13.49,
    description:
      "Karlos Kastaneda “Yuxugörmə sənəti” adlı kitabında yuxular üzərində nəzarəti ələ almağın, onları idarə və dərk etməyin üsullarından bəhs edir.",
    image: book12,
  },

  {
    id: 13,
    title: "İtmiş kitab dükanı",
    author: "İvi Vudz",
    price: 13.49,
    description:
      "“İtmiş kitab dükanı” kitabların ətrafında birləşən üç taleyi və azadlıq axtarışını təsirli şəkildə nəql edən romandır.",
    image: book13,
  },

  {
    id: 14,
    title: "Rus gəmisində intihar",
    author: "Zahir Məlikli",
    price: 16.69,
    description:
      "Birinci şəxsin dilindən nəql olunan bu avtobioqrafik-sosial roman milli dəyərlər, əxlaq və insan taleləri fonunda xeyirlə şərin mübarizəsini müxtəlif tarixi dövrlər kontekstində əks etdirir.",
    image: book14,
  },

  {
    id: 15,
    title: "Alov sütunu",
    author: "Ken Follet",
    price: 25.59,
    description:
      "Kraliça I Yelizavetanın hakimiyyətinin ilk illəri fonunda iki gəncin sevgisi və siyasi çəkişmələr ətrafında cərəyan edən tarixi roman.",
    image: book15,
  },

  {
    id: 16,
    title: "Təslimiyyət",
    author: "Mişel Uelbek",
    price: 9.44,
    description:
      "2022-ci ildə Fransada siyasi və mədəni çevriliş fonunda Avropanın islama təslim olması ideyasını tənha bir ədəbiyyat müəlliminin taleyi üzərindən araşdıran siyasi-fantastik roman.",
    image: book16,
  },
];

export default books;

//Footer
export const socialLinks = [
  { Icon: FaFacebook, url: "https://facebook.com/" },
  { Icon: FaTwitter, url: "https://twitter.com/" },
  { Icon: FaInstagram, url: "https://instagram.com/" },
];

export const quickLinks = [
  { title: "Ana Səhifə", url: "/" },
  { title: "Haqqımızda", url: "/about" },
  { title: "Kitablar", url: "/books" },
  { title: "Bizimlə Əlaqə", url: "/contact" },
];

// Ha page
export const hastats = [
  { icon: BookOpen, value: "5K+", label: "Kitab Kolleksiyası" },
  { icon: Users, value: "10K+", label: "Məmnun Oxucular" },
  { icon: Award, value: "15+", label: "Qazanılmış Mükafatlar" },
];

// About page
export const apstats = [
  { icon: Award, value: "15+", label: "Qazanılmış Mükafatlar" },
  { icon: Users, value: "15K+", label: "Aktiv Oxuyucular" },
  { icon: BookOpen, value: "5K+", label: "Mövcud Kitablar" },
  { icon: Star, value: "4.8", label: "Orta Reytinq" },
];

// NAVBAR
export const navItems = [
  {
    name: "Ana Səhifə",
    path: "/",
    icon: Home,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Haqqımızda",
    path: "/about",
    icon: Info,
    color: "from-purple-400 to-indigo-500",
  },
  {
    name: "Kitablar",
    path: "/books",
    icon: BookOpen,
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Bizimlə Əlaqə",
    path: "/contact",
    icon: Mail,
    color: "from-rose-400 to-pink-600",
  },
];

// OURBESTSELLER.JSX
export const bgColors = [
  "from-[#fce3ec] to-[#ffe8d4]",
  "from-[#e2f0cb] to-[#ffe6e6]",
  "from-[#d0e6f6] to-[#f3e5f5]",
  "from-[#fff1c1] to-[#ffd3b4]",
  "from-[#e1f7d5] to-[#ffccbc]",
  "from-[#f0f4c3] to-[#b2dfdb]",
  "from-[#ede7f6] to-[#e1bee7]",
  "from-[#dcedc8] to-[#fff9c4]",
];

export const obsbooks = [
  {
    id: 1,
    image: bestseller1,
    title: "Ağlasığmazlıq dağına qalxmaq",
    author: "Richard Dawkins",
    price: 14.44,
    desc: "Təkamülün möcüzəvi mexanizmini sadə və təsirli şəkildə izah edən elmi səyahət kitabı.",
  },

  {
    id: 2,
    image: bestseller2,
    title: "Sevgili",
    author: "Toni Morrison",
    price: 13.39,
    desc: "Köləliyin analıq üzərində dağıdıcı təsirini və azadlıq eşqini təsirli şəkildə danışan roman.",
  },

  {
    id: 3,
    image: bestseller3,
    title: "Şəkər Portağalı",
    author: "Jose Mauro De Vasconcelos",
    price: 8.49,
    desc: "Uşaqlığın saf baxışı ilə ağrılı həyat həqiqətlərindən danışan təsirli avtobioqrafik povest.",
  },

  {
    id: 4,
    image: SecilmisNesrler3,
    title: "Parfümer",
    author: "Patrik Züskind",
    price: 10.74,
    desc: "XVIII əsr Fransasında əcaib Qrenuyun dünyanı sarsıdan hekayəsi.",
  },

  {
    id: 5,
    image: bestseller5,
    title: "Şeytanı aldatmaq",
    author: "Napoleon Hill",
    price: 8.49,
    desc: "Qorxu və daxili maneələri aşaraq uğura aparan yeddi prinsipi açıqlayan ilhamverici kitab.",
  },

  {
    id: 6,
    image: bestseller6,
    title: "Gündəlik İlham - Ferrarisini Satmış Rahibdən",
    author: "Robin Şarma",
    price: 10.17,
    desc: "Gündəlik ilhamverici sitatlarla daha məhsuldar və mənalı həyat qurmağa çağıran motivasiya kitabı.",
  },

  {
    id: 7,
    image: SecilmisNesrler1,
    title: "Atomik vərdişlər",
    author: "James Clear",
    price: 11.69,
    desc: "Kiçik vərdişlərin böyük və qalıcı dəyişikliklər yaratma gücünü göstərən ilhamverici kitab.",
  },

  {
    id: 8,
    image: SecilmisNesrler2,
    title: "İndinin gücü",
    author: "Eckhart Tolle",
    price: 8.49,
    desc: "İndinin gücü ilə zehni sakitləşdirib həyatına nəzarəti öyrədən kitab.",
  },
];

export const featuredBooks = [
  {
    image: SecilmisNesrler1,
    title: "Atomik vərdişlər",
    author: "James Clear",
    description:
      "Kiçik vərdişlərin böyük və qalıcı dəyişikliklər yaratma gücünü göstərən ilhamverici kitab.",
  },

  {
    image: SecilmisNesrler2,
    title: "İndinin gücü",
    author: "Eckhart Tolle",
    description:
      "İndinin gücü ilə zehni sakitləşdirib həyatına nəzarəti öyrədən kitab.",
  },

  {
    image: SecilmisNesrler3,
    title: "Parfümer",
    author: "Patrik Züskind",
    description:
      "XVIII əsr Fransasında əcaib Qrenuyun dünyanı sarsıdan hekayəsi.",
  },
];

// RatedBooks
export const hbbooks = [
  {
    id: 101,
    title: "Şəkər Portağalı",
    author: "Jose Mauro De Vasconcelos",
    price: 8.49,
    rating: 5,
    image: bestseller3,
  },

  {
    id: 102,
    title: "Cek Manın uğur prinsipləri",
    author: "Şixa Şarma",
    price: 5.91,
    rating: 4,
    image: book2,
  },

  {
    id: 103,
    title: "Dəli Kür",
    author: "İsmayıl Şıxlı",
    price: 11.04,
    rating: 4,
    image: book4,
  },

  {
    id: 104,
    title: "Atama məktub",
    author: "Frans Kafka",
    price: 3.37,
    rating: 3,
    image: book8,
  },
];
