const eventsData = [
  {
    id: 1,
    city: "Vijayawada",
    event: "Dasara Festival",
    date: "2025-10-10",
    description: "Celebration with cultural performances and fireworks.",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Vijayadashami_Dasara_Dussehra_Durga_Pooja_India_October_2013_20200504190620.jpg"
  },
  {
    id: 2,
    city: "Vizag",
    event: "Beach Festival",
    date: "2025-12-20",
    description: "Live music and food stalls along the beach.",
    image: "https://www.travelandleisureindia.in/wp-content/uploads/2018/08/AP-Beaches_Feature.jpg"
  },
  {
    id: 3,
    city: "Vijayawada",
    event: "Dance Festival",
    date: "2025-09-01",
    description: "Traditional Kuchipudi dance performances.",
    image: "https://www.caleidoscope.in/wp-content/uploads/2021/05/Folk-Dances-of-Andra-Pradesh-Lambadi-800x533.jpg"
  },
  {
    id: 4,
    city: "Vizag",
    event: "Navaratri Utsav",
    date: "2025-10-03",
    description: "Nine nights of dance, devotion and lights.",
    image: "https://file.pngbackground.com/uploads/preview/navratri-banner-new-background-images-download-11664035327dg714069m6.jpg"
  },
  {
    id: 5,
    city: "Tirupati",
    event: "Brahmotsavam",
    date: "2025-09-25",
    description: "Annual religious festival at Tirumala Temple.",
    image: "https://images.tv9telugu.com/wp-content/uploads/2022/09/brahmotsavam-vahanas.jpg"
  },
  {
    id: 6,
    city: "Amaravati",
    event: "Buddha Purnima",
    date: "2025-05-15",
    description: "Commemoration of Buddha’s birth and teachings.",
    image: "https://th.bing.com/th/id/OIP.LVaxcjEhvC0uBMsqocVAPQHaGn?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 7,
    city: "Vizag",
    event: "Food Carnival",
    date: "2025-08-18",
    description: "Local delicacies and street food showcase.",
    image: "https://th.bing.com/th/id/OIP.dQlsyeyvP5LcRZZ_yG477wHaCx?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 8,
    city: "Kakinada",
    event: "Sea Food Fest",
    date: "2025-11-05",
    description: "Celebration of coastal cuisine.",
    image: "https://i.ytimg.com/vi/_N3ucniYMCI/maxresdefault.jpg"
  },
  {
    id: 9,
    city: "Vijayawada",
    event: "Flower Show",
    date: "2025-03-12",
    description: "Floral displays and gardening competitions.",
    image: "https://th.bing.com/th/id/OIP.aOX_Cr2DuxqD4SHPyadMGQHaE2?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 10,
    city: "Vizag",
    event: "Sankranti Sand Art",
    date: "2025-01-14",
    description: "Sand art exhibition on beach for harvest festival.",
    image: "https://s-media-cache-ak0.pinimg.com/736x/f9/a1/bf/f9a1bf31fd1ecb9c851fe456991c7d99.jpg"
  },
  {
    id: 11,
    city: "Rajahmundry",
    event: "Godavari Pushkaralu",
    date: "2025-07-21",
    description: "River ritual festival celebrated every 12 years.",
    image: "https://th.bing.com/th/id/OIP.4BdFxAsWMPVSSjnXNmR0dAHaEG?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 12,
    city: "Vijayawada",
    event: "Kuchipudi Natya Utsav",
    date: "2025-06-05",
    description: "Classical dance festival dedicated to Kuchipudi.",
    image: "https://i0.wp.com/thisweekindia.news/wp-content/uploads/2021/10/Kuchipudi-Parampara-Foundation-Presents-its-Eight-Edition-Natya-Parampara-Utsav-2021-thisweekindia.png?fit=450%2C450&ssl=1"
  },
  {
    id: 13,
    city: "Vizag",
    event: "Andhra Film Festival",
    date: "2025-08-10",
    description: "Showcasing regional films and documentaries.",
    image: "https://th.bing.com/th/id/OIP.FcUjtyck8IQCA1DIy1sV2QHaLH?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 14,
    city: "Tirupati",
    event: "Spiritual Music Fest",
    date: "2025-10-15",
    description: "Bhajans and classical music performances.",
    image: "https://th.bing.com/th/id/OIP.rPNJ430gtmj8gOnLWRAapQHaEi?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 15,
    city: "Amaravati",
    event: "Andhra Handloom Expo",
    date: "2025-04-22",
    description: "Exhibition of traditional weaving and textiles.",
    image: "https://th.bing.com/th/id/OIP.6jBZw-M1iL9wB6AMJySUCQHaE8?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 16,
    city: "Vijayawada",
    event: "Andhra Theatre Week",
    date: "2025-07-14",
    description: "Plays by local drama troupes and artists.",
    image: "https://i.ytimg.com/vi/zU-i-iUMH3A/maxresdefault.jpg"
  },
  {
    id: 17,
    city: "Vizag",
    event: "Beach Yoga Retreat",
    date: "2025-05-10",
    description: "Yoga sessions and wellness talks on beach.",
    image: "https://th.bing.com/th/id/OIP.SB1KCRwlBdhF71WxuTElPAHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 18,
    city: "Kurnool",
    event: "Car Festival",
    date: "2025-03-20",
    description: "Chariot processions in historic temples.",
    image: "https://th.bing.com/th/id/OIP.QLpqOTBffvtG5G9o1TTa6wHaE8?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 19,
    city: "Vijayawada",
    event: "Riverfront Carnival",
    date: "2025-08-30",
    description: "Cultural shows by the Krishna river.",
    image: "https://th.bing.com/th/id/OIP._5p6Uic3d9mVSfk0egEiwwHaD4?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 20,
    city: "Vizag",
    event: "Kite Festival",
    date: "2025-01-15",
    description: "Kite flying and competitions near beach.",
    image: "https://images.saymedia-content.com/.image/t_share/MTc2NzMxNTE2MjcyMzg3OTYy/kite-festivals-around-the-world.jpg"
  },
  {
    id: 21,
    city: "Tirupati",
    event: "Annamacharya Jayanti",
    date: "2025-05-09",
    description: "Tribute to the saint composer with music.",
    image: "https://th.bing.com/th/id/OIP.zknfMkTeVk_OXaRYrc9YUAHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 22,
    city: "Guntur",
    event: "Chilli Festival",
    date: "2025-03-05",
    description: "Celebration of Guntur’s famous red chillies.",
    image: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/2022/09/16130554/King-Chilli-Festival.png"
  },
  {
    id: 23,
    city: "Vijayawada",
    event: "Crafts Mela",
    date: "2025-11-11",
    description: "Handicrafts and artisan work exhibition.",
    image: "https://4.bp.blogspot.com/-2u96OWK7ygA/V-KJ7X8IrFI/AAAAAAAAmzQ/XjanFq6wUIUu_aVtNI5_FYpjjLT-8_quwCLcB/s1600/DSCN4296.JPG"
  },
  {
    id: 24,
    city: "Vizag",
    event: "Techno Fest",
    date: "2025-09-15",
    description: "Fusion of tech innovations and culture.",
    image: "https://th.bing.com/th/id/OIP.ckdc6f9hAI-41JCwDADudwHaEt?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 25,
    city: "Nellore",
    event: "Kabaddi League",
    date: "2025-06-20",
    description: "Inter-district Kabaddi tournament.",
    image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/06/07/690676-431716-u-mumba-pti.jpg"
  },
  {
    id: 26,
    city: "Vijayawada",
    event: "Ugadi Celebrations",
    date: "2025-04-01",
    description: "New year festivities with music and sweets.",
    image: "https://th.bing.com/th/id/OIP.Ww_PK-sxKAMPSpLi3XGYCgHaEf?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 27,
    city: "Vizag",
    event: "Book Fair",
    date: "2025-02-18",
    description: "Literary fest with book launches and readings.",
    image: "https://th.bing.com/th/id/OIP.eIOG4udPIUswda3DWjeMrgHaEJ?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 28,
    city: "Tirupati",
    event: "Sankirtan Yatra",
    date: "2025-07-30",
    description: "Processions with devotional singing.",
    image: "https://th.bing.com/th/id/OIP.cpSq5pEG2jht7BMPnaKPVAHaFj?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 29,
    city: "Vijayawada",
    event: "Drama Festival",
    date: "2025-10-01",
    description: "Live theatre from local artists.",
    image: "https://th.bing.com/th/id/OIP.T2mLstLOJ_ZuQAncFFSsLAHaDL?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    id: 30,
    city: "Vizag",
    event: "Cultural Parade",
    date: "2025-12-05",
    description: "City-wide parade with traditional costumes.",
    image: "https://th.bing.com/th/id/OIP.WSy8eAtX4lXV0YQYagfCfAAAAA?cb=iwp2&rs=1&pid=ImgDetMain"
  }
];

export default eventsData;
