const navLinks = [
  {
    name: "Proyek",
    link: "#work",
  },
  {
    name: "Pengalaman",
    link: "#experience",
  },
  {
    name: "Kemampuan",
    link: "#skills",
  },
  {
    name: "Testimoni",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ide", imgPath: "/images/ide.png" },
  { text: "Konsep", imgPath: "/images/konsep.png" },
  { text: "Desain", imgPath: "/images/desain.png" },
  { text: "Kode", imgPath: "/images/coding.png" },
  { text: "Ide", imgPath: "/images/ide.png" },
  { text: "Konsep", imgPath: "/images/konsep.png" },
  { text: "Desain", imgPath: "/images/desain.png" },
  { text: "Kode", imgPath: "/images/coding.png" },
];

const variables = [
  { text: "Inovatif" },
  { text: "Fungsional" },
  { text: "Terstruktur" },
  { text: "Intuitif" },
  { text: "Inovatif" },
  { text: "Fungsional" },
  { text: "Terstruktur" },
  { text: "Intuitif" },
];

const counterItems = [
  {
    value: 1,
    suffix: "+",
    imgPath: "/images/pengalaman.png",
    label: "Tahun Pengalaman",
  },
  {
    value: 9,
    suffix: "+",
    imgPath: "/images/klien-puas.png",
    label: "Klien Puas",
  },
  {
    value: 11,
    suffix: "+",
    imgPath: "/images/proyek-selesai.png",
    label: "Proyek Selesai",
  },
];

const percentages = [
  {
    id: 1,
    role: "Data Visualization",
    iconPath: "/images/visualisasi_data.png",
    languagePercentage: [
      {
        languageImg: "/images/Matplotlib-fill.png",
        name: "Matplotlib",
        statsBar: 62,
        value: 62,
      },
      {
        languageImg: "/images/Seaborn-fill.png",
        name: "Seaborn",
        statsBar: 21,
        value: 21,
      },
      {
        languageImg: "/images/Phpchart-fill.png",
        name: "Php Chart",
        statsBar: 47,
        value: 47,
      },
      {
        languageImg: "/images/Chartjs-fill.png",
        name: "Chart.js",
        statsBar: 53,
        value: 53,
      },
    ],
    recentProject: 5,
    overall: 4.6,
    status: "☠️ Awful",
  },
  {
    id: 2,
    role: "Mobile App",
    iconPath: "/images/aplikasi_mobile.png",
    languagePercentage: [
      {
        languageImg: "/images/React.png",
        name: "React-Native",
        statsBar: 82,
        value: 82,
      },
      {
        languageImg: "/images/Flutter.png",
        name: "Flutter",
        statsBar: 55,
        value: 55,
      },
      {
        languageImg: "/images/Mongodb-fill.png",
        name: "MongoDB",
        statsBar: 75,
        value: 75,
      },
      {
        languageImg: "/images/Firebase-fill.png",
        name: "Firebase",
        statsBar: 88,
        value: 88,
      },
    ],
    recentProject: 3,
    overall: 7.5,
    status: "😐 Fair",
  },
  {
    id: 3,
    role: "Web Development",
    iconPath: "/images/pengembangan_web.png",
    languagePercentage: [
      {
        languageImg: "/images/Typescript-fill.png",
        name: "TypeScript",
        statsBar: 85,
        value: 85,
      },
      {
        languageImg: "/images/Php-fill.png",
        name: "Php",
        statsBar: 64,
        value: 64,
      },
      {
        languageImg: "/images/Postgresql-fill.png",
        name: "PostgreSQL",
        statsBar: 77,
        value: 77,
      },
      {
        languageImg: "/images/Mysql-fill.png",
        name: "MySQL",
        statsBar: 73,
        value: 73,
      },
    ],
    recentProject: 7,
    overall: 7.5,
    status: "😐 Fair",
  },
  {
    id: 4,
    role: "Desktop App",
    iconPath: "/images/aplikasi_desktop.png",
    languagePercentage: [
      {
        languageImg: "/images/electronjs-fill.png",
        name: "Electron.js",
        statsBar: 50,
        value: 50,
      },
      {
        languageImg: "/images/tkinter-fill.png",
        name: "Tkinter",
        statsBar: 45,
        value: 45,
      },
      {
        languageImg: "/images/sql-server-fill.png",
        name: "SQL Server",
        statsBar: 52,
        value: 52,
      },
      {
        languageImg: "/images/oracle-fill.png",
        name: "Oracle",
        statsBar: 56,
        value: 56,
      },
    ],
    recentProject: 1,
    overall: 5.1,
    status: "🗿 Bad",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/data-visualization.png",
    title: "Data Visualization",
    desc: "Pembuatan visualisasi data yang interaktif dan informatif menggunakan beberapa pustaka dalam pengambilan keputusan berbasis data.",
  },
  {
    imgPath: "/images/mobile-app.png",
    title: "Mobile App",
    desc: "Pengembangan aplikasi mobile yang responsif untuk memenuhi kebutuhan spesifik pengguna di berbagai platform seperti Android dan iOS.",
  },
  {
    imgPath: "/images/web-development.png",
    title: "Web Development",
    desc: "Pembangunan dan desain website yang dinamis dengan memperhatikan fungsionalitas yang kuat pada berbagai perangkat.",
  },
  {
    imgPath: "/images/desktop-app.png",
    title: "Desktop App",
    desc: "Pengembangan aplikasi desktop cross-platform pada operation system yang stabil dan efisien untuk mendukung produktivitas secara lokal.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Mobile App",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Desktop App",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Web Development",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "3D Diagram",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Kemampuannya dalam pengembangan aplikasi mobile menunjukkan efisiensi yang baik. Aryo berdedikasi untuk mencoba teknologi baru yang memberinya nilai tambah dalam membangun proyek.",
    imgPath: "/images/react-native-exp.png",
    logoPath: "/images/React.png",
    location: "Kamboja",
    role: "Mobile App",
    title: "Food Order & Delivery",
    date: "17 April 2025 - 2 Mei 2025",
    responsibilities: [
      "Membangun aplikasi mobile cross-platform menggunakan React Native dengan UI yang interaktif.",
      "Mengintegrasikan API dasar dan penyimpanan lokal untuk mendukung fitur yang diminta.",
    ],
  },
  {
    review:
      "Oke dia cukup mampu menggabungkan fitur visualisasi data dan enkripsi dalam proyek berbasis web.",
    imgPath: "/images/angular-exp.png",
    logoPath: "/images/Angular.png",
    location: "Indonesia",
    role: "Web",
    title: "Inventory & Project Management",
    date: "26 Desember 2024 - 6 Februari 2025",
    responsibilities: [
      "Mengembangkan website responsif yang scalable dengan penyesuaian terhadap ruang lingkup dan tenggat waktu.",
      "Memanfaatkan Python untuk menampilkan grafik data dinamis dalam bentuk visualisasi interaktif.",
      "Mengimplementasikan algoritma enkripsi berbasis logika kriptografi dalam sistem keamanan data.",
    ],
  },
  {
    review:
      "Dia bisa ngebangun game edukatif berbasis memori yang kece sama ga berat. Terus juga logika permainan yang dibuat ga kaleng-kaleng, tingkat kesulitannya juga yang bikin game ini terasa seru & lebih menantang.",
    imgPath: "/images/flutter-exp.png",
    logoPath: "/images/Flutter.png",
    location: "Indonesia",
    role: "Mobile App",
    title: "Memory Game",
    date: "7 Juni 2024 - 17 Juni 2024",
    responsibilities: [
      "Mendesain dan mengembangkan game memori berbasis Flutter dengan level permainan bertingkat.",
      "Mengimplementasikan logika permainan untuk mencocokkan kartu menggunakan state dan animasi sederhana.",
      "Mengoptimalkan UI agar responsif di berbagai ukuran layar serta menjaga performa tetap ringan.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Sean Vincent",
    mentions: "@vincent3__3",
    location: "Australia",
    review:
      "Aryo menunjukkan kemampuan yang cukup baik meskipun baru terjun ke dunia pemrograman. Dia berhasil mengubah kebutuhan proyek kami yang kompleks menjadi website yang fungsional dan mudah digunakan.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Bagas Dwi",
    mentions: "@bagatrip80",
    location: "Indonesia",
    review:
      "Doi ngebawa sentuhan segar ke website yang gue minta. Gue puas banget sama hasilnya.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Tovan Galantra",
    mentions: "@face.me_",
    location: "Indonesia",
    review:
      "Walau hasilnya ga seberapa, tapi gua yakin dia punya dedikasi penuh buat ngembangin potensi dirinya lebih jauh lagi. Semangat bre!!!",
    imgPath: "/images/client3.png",
  },
  {
    name: "Thùy Phương",
    mentions: "@_Phươnggg.",
    location: "Vietnam",
    review:
      "Aryo dengan cepat memahami kebutuhan yang diminta dan mampu menghadirkan aplikasi mobile yang tidak hanya sesuai harapan, tapi melebihi ekspektasi. Ia cukup andal di sisi frontend dan backend.",
    imgPath: "/images/client00.png",
  },
  {
    name: "Alan",
    mentions: "@msbreewclover",
    location: "Indonesia",
    review: "Mantep we.",
    imgPath: "/images/client00.png",
  },
  {
    name: "Ponel",
    mentions: "@p0lus1_n1kel",
    location: "Indonesia",
    review:
      "Goodjob bro! Hasil lo bikin gw lumayan puas si... Ada beberapa fitur yang lo masukin padahal gw ga minta... Which is bagus si bro, cuma gw kasian aja ama lu nya.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/cherrrrrrrryy__/",
    imgPath: "/images/instagram.png",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/aryo-wibisono-93449b372/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "Github",
    url: "https://github.com/awshied/",
    imgPath: "/images/github.png",
  },
];

export {
  words,
  variables,
  abilities,
  logoIconsList,
  percentages,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
