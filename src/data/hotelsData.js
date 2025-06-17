const hotelsData = [
  {
    id: 1,
    name: "Novotel Visakhapatnam Varun Beach",
    location: "Visakhapatnam",
    description: "Luxury hotel with sea views and modern amenities near RK Beach.",
    image: "https://www.ahstatic.com/photos/7535_ho_00_p_1024x768.jpg",
    pricePerNight: 4500,
    roomsAvailable: 10
  },
  {
    id: 2,
    name: "Haritha Hill Resort",
    location: "Araku Valley",
    description: "Government-run resort surrounded by lush greenery and hills.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f1/e8/bf/haritha-hill-resort.jpg?w=2000&h=-1&s=1",
    pricePerNight: 6500,
    roomsAvailable: 8
  },
  {
    id: 3,
    name: "Fortune Murali Park",
    location: "Vijayawada",
    description: "Premium business hotel located in the heart of Vijayawada.",
    image: "https://gos3.ibcdn.com/fortune-murali-park-vijayawada-vijayawada-exterior-41445354g.jpg",
    pricePerNight: 5500,
    roomsAvailable: 15
  },
  {
    id: 4,
    name: "The Gateway Hotel",
    location: "Vijayawada",
    description: "Upscale hotel on the banks of the Krishna River with fine dining.",
    image: "https://images.squarespace-cdn.com/content/v1/5e8baefd7ac340310c7c8c58/1586925574588-MMZ7TOYK6AV643LSB0TY/Home-Gallery-4+(1).jpg",
    pricePerNight: 6000,
    roomsAvailable: 12
  },
  {
    id: 5,
    name: "Hotel Daspalla",
    location: "Visakhapatnam",
    description: "Elegant hotel with rooftop dining and easy beach access.",
    image: "https://th.bing.com/th/id/OIP.0N5A1O9k_xUMI8oOQ3UkqAHaKd?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 7000,
    roomsAvailable: 10

  },
  {
    id: 6,
    name: "Green Park Hotel",
    location: "Visakhapatnam",
    description: "Well-known hotel offering a blend of comfort and convenience.",
    image: "https://www.greenparkhotelandspa.com.ua/wp-content/uploads/2017/10/086.jpg",
    pricePerNight: 6500,
    roomsAvailable: 20

  },
  {
    id: 7,
    name: "Fairfield by Marriott",
    location: "Visakhapatnam",
    description: "Modern hotel ideal for business and leisure stays.",
    image: "https://th.bing.com/th/id/OIP.kHPB6M-hk9jlAuGnUu1SfgHaE0?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 8000,
    roomsAvailable: 15
  },
  {
    id: 8,
    name: "Hotel Goutham Grand",
    location: "Guntur",
    description: "Popular hotel with modern amenities and central location.",
    image: "https://th.bing.com/th/id/OIP.hqpTE9aKFo0lF6F1wRSwWwHaHs?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 7500,
    roomsAvailable: 12
  },
  {
    id: 9,
    name: "Hotel Ilapuram",
    location: "Vijayawada",
    description: "Well-rated hotel with clean rooms and great service.",
    image: "https://th.bing.com/th/id/OIP.Q1CDh4mJff4idpF1SjtEDQHaE7?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 6000,
    roomsAvailable: 18
  },
  {
    id: 10,
    name: "Manjeera Sarovar Premiere",
    location: "Rajahmundry",
    description: "Luxury hotel along the Godavari River with modern amenities.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/a4/d9/da/manjeera-sarovar-premiere.jpg?w=700&h=-1&s=1",
    pricePerNight: 12000,
    roomsAvailable: 10
  },
  {
    id: 11,
    name: "Treebo Trend C Plaza",
    location: "Tirupati",
    description: "Comfortable budget stay close to famous temples.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/72/83/fd/treebo-c-plaza.jpg?w=1000&h=-1&s=1",
    pricePerNight: 3500,
    roomsAvailable: 20
  },
  {
    id: 12,
    name: "Pai Viceroy",
    location: "Tirupati",
    description: "Excellent location and amenities for pilgrimage travelers.",
    image: "https://th.bing.com/th/id/OIP.-5MoICXAlBfe7a1Ob5AQAQAAAA?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 8000,
    roomsAvailable: 15

  },
  {
    id: 13,
    name: "Hotel Bliss",
    location: "Tirupati",
    description: "Stylish and cozy hotel with great dining options.",
    image: "https://th.bing.com/th/id/OIP.dJmYSbppsstd6sBVRw_wnQHaE6?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 5000,
    roomsAvailable: 25
  },
  {
    id: 14,
    name: "Vivanta Vijayawada",
    location: "Vijayawada",
    description: "Premium Taj group hotel offering luxury experiences.",
    image: "https://r1imghtlak.mmtcdn.com/fa2af7e4d2cc11e9b0dc0242ac110002.jpg",
    pricePerNight: 7000,
    roomsAvailable: 30
  },
  {
    id: 15,
    name: "Dolphin Hotel",
    location: "Visakhapatnam",
    description: "Landmark hotel known for business and leisure stays.",
    image: "https://th.bing.com/th/id/OIP.5AIPa0pEQdn-LZHtL_gPRAHaFg?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 6000,
    roomsAvailable: 20
  },
  {
    id: 16,
    name: "Royal Fort Hotel",
    location: "Visakhapatnam",
    description: "Spacious rooms and centrally located for business travelers.",
    image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701160938291525-2b80f9b6c5ce11ea80540242ac110004.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
    pricePerNight: 5500,
    roomsAvailable: 15
  },
  {
    id: 17,
    name: "Hotel Subhamastu",
    location: "Kakinada",
    description: "Affordable hotel with family-friendly service.",
    image: "https://cdn.venuelook.com/uploads/space_13204/1513687004_595x400.png",
    pricePerNight: 4500,
    roomsAvailable: 25
  },
  {
    id: 18,
    name: "Royal Park",
    location: "Kakinada",
    description: "Modern rooms and quality service in central Kakinada.",
    image: "https://i.ytimg.com/vi/_DXMJhe5a3o/maxresdefault.jpg",
    pricePerNight: 7000,
    roomsAvailable: 10
  },
  {
    id: 19,
    name: "Hotel Royal Grand",
    location: "Anantapur",
    description: "Budget hotel perfect for short business visits.",
    image: "https://pix10.agoda.net/hotelImages/985/98537/98537_16051702020042381482.jpg?s=1024x768",
    pricePerNight: 3500,
    roomsAvailable: 20
  },
  {
    id: 20,
    name: "Sree Vaibhav Residency",
    location: "Tirupati",
    description: "Peaceful accommodation near the foothills of Tirumala.",
    image: "https://th.bing.com/th/id/OIP.g8iWD0XC8NVe_ARhMEtkaQHaEK?cb=iwp2&rs=1&pid=ImgDetMain",
    pricePerNight: 5000,
    roomsAvailable: 15
  },
];

export default hotelsData;
