const faker = require('faker');

const eventsData = [
  {
    title: "Mother's Day Celebration - Apron Design & Cake Decorating",
    host: 'MERAKI on Move',
    categoryId: 6,
    image: "https://aevent-project.s3.amazonaws.com/1-mothersDay.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 25.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Mother's Day Make + Take Essential Oils Class",
    host: 'NJ Metta Yoga',
    categoryId: 6,
    image: "https://aevent-project.s3.amazonaws.com/2-mothersDay.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 35.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Mother's Day Brunch & Dinner",
    host: "Delta's Restaurant",
    categoryId: 6,
    image: "https://aevent-project.s3.amazonaws.com/3-mothersDay.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 105.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Art of Bonsai: Cutting and Wiring",
    host: 'Calgo Gardens',
    categoryId: 8,
    image: "https://aevent-project.s3.amazonaws.com/4-free.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 0.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Free Cooking Class: Clean Eating Made Simple",
    host: "Nature's Corner Market",
    categoryId: 8,
    image: "https://aevent-project.s3.amazonaws.com/5-free.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 0.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "ODESZA Bright Night Glow Concert",
    host: 'B&O Railroad Museum',
    categoryId: 1,
    image: "https://aevent-project.s3.amazonaws.com/6-music.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 35.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Cherub Tour",
    host: 'Camp City',
    categoryId: 1,
    image: "https://aevent-project.s3.amazonaws.com/7-music.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 50.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Frank Sinatra Concert Collection",
    host: 'Donna Cardillo',
    categoryId: 1,
    image: "https://aevent-project.s3.amazonaws.com/8-music.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 65.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "One Day of Electronic Dance Music",
    host: 'BB&T',
    categoryId: 1,
    image: "https://aevent-project.s3.amazonaws.com/9-music.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 25.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Billy Joel Rendition",
    host: 'Trevor Hall',
    categoryId: 1,
    image: "https://aevent-project.s3.amazonaws.com/10-music.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 65.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Tomorrowland 2021",
    host: "Belgian Electronic",
    categoryId: 3,
    image: "https://aevent-project.s3.amazonaws.com/11-music.jpg",
    description: faker.lorem.paragraphs(6),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 320.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "EDC Las Vegas 2021",
    host: "Nevada Venue",
    categoryId: 3,
    image: "https://aevent-project.s3.amazonaws.com/12-music.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 190.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Lollapalooza 2021",
    host: "The Windy City",
    categoryId: 3,
    image: "https://aevent-project.s3.amazonaws.com/13-music.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 120.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Ultra Miami Music Festival",
    host: "Delaware County",
    categoryId: 3,
    image: "https://aevent-project.s3.amazonaws.com/14-music.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 260.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "FLOAT FEST",
    host: "San Marcos TX Venue",
    categoryId: 3,
    image: "https://aevent-project.s3.amazonaws.com/15-music.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 170.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Electric Forest Festival",
    host: "Billy Kimber Stadium",
    categoryId: 3,
    image: "https://aevent-project.s3.amazonaws.com/16-music.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 210.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Sushi Making 101",
    host: "Soule' Culinary Art Studio",
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/17-food.jpg",
    description: faker.lorem.paragraphs(5),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 65.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Crawfish Boil Festival",
    host: 'Long Wharf Park',
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/18-food.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 20.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Cocktails and Wine: 2nd Street",
    host: 'Peter Station',
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/19-food.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 35.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Food Truck Craze: Spring Edition",
    host: 'Ridge Ave',
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/20-food.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Happy Hour Historic Food Tour",
    host: 'Passyunk Corp.',
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/21-food.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 15.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Chef's Tasting Brunch",
    host: 'Catering Company',
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/22-food.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 65.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Brunch in Dallasbasas",
    host: 'Mesa Grill',
    categoryId: 2,
    image: "https://aevent-project.s3.amazonaws.com/23-food.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 70.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "120th Annual Student Exhibition Preview",
    host: 'Academy of Fine Arts',
    categoryId: 4,
    image: "https://aevent-project.s3.amazonaws.com/24-art.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Manayunk Arts Festival",
    host: 'Manayunk Development Corporation',
    categoryId: 4,
    image: "https://aevent-project.s3.amazonaws.com/25-art.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 10.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Art of Looking (virtual)",
    host: 'Woodmere Art Museum',
    categoryId: 4,
    image: "https://aevent-project.s3.amazonaws.com/26-art.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 6.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Spring Art Expo",
    host: 'Learning Hub',
    categoryId: 4,
    image: "https://aevent-project.s3.amazonaws.com/27-art.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "KIDZ BOP Dance Along",
    host: 'Blip Merriam Theater',
    categoryId: 5,
    image: "https://aevent-project.s3.amazonaws.com/28-fam.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 15.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Family Art & Storytelling",
    host: 'Woodmere Museum',
    categoryId: 5,
    image: "https://aevent-project.s3.amazonaws.com/29-fam.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 10.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: '"Camp" Weekend for Youth',
    host: 'YMCA',
    categoryId: 5,
    image: "https://aevent-project.s3.amazonaws.com/30-fam.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 60.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Family Painting Workshop",
    host: 'Suprising Color',
    categoryId: 5,
    image: "https://aevent-project.s3.amazonaws.com/31-fam.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 25.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Outdoor Pre-K Storytime",
    host: 'Cherry Street Pier',
    categoryId: 5,
    image: "https://aevent-project.s3.amazonaws.com/32-fam.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Family Game Night",
    host: 'Charles Santore Library',
    categoryId: 5,
    image: "https://aevent-project.s3.amazonaws.com/33-fam.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Evening of NYC Songs and Stories",
    host: 'Scottish Rite Auditorium',
    categoryId: 7,
    image: "https://aevent-project.s3.amazonaws.com/34-onl.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 10.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Jackbox Comedy Night",
    host: 'Mancuso Show Management',
    categoryId: 7,
    image: "https://aevent-project.s3.amazonaws.com/35-onl.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 10.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Preview: Coding Boot-Camp",
    host: 'App Academy',
    categoryId: 7,
    image: "https://aevent-project.s3.amazonaws.com/36-onl.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 100.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Zoom Open Mic-Stand Up",
    host: 'DiGi Corp.',
    categoryId: 7,
    image: "https://aevent-project.s3.amazonaws.com/37-onl.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 20.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Reality Theif's Magic Show",
    host: 'Hello',
    categoryId: 7,
    image: "https://aevent-project.s3.amazonaws.com/38-onl.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 25.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Let's Sing (Online)!",
    host: 'Clock Work Rally',
    categoryId: 7,
    image: "https://aevent-project.s3.amazonaws.com/39-onl.jpg",
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

const ticketsData = [
  { eventId: 1, userId: 10 },
  { eventId: 2, userId: 11 },
  { eventId: 3, userId: 12 },
  { eventId: 4, userId: 13 },
  { eventId: 5, userId: 14 },
  { eventId: 6, userId: 15 },
  { eventId: 7, userId: 16 },
  { eventId: 8, userId: 17 },
  { eventId: 2, userId: 18 },

  { eventId: 8, userId: 1 },
  { eventId: 25, userId: 1 },
  { eventId: 18, userId: 1 },
];

const favoritesData = [
  { eventId: 1, userId: 10 },
  { eventId: 2, userId: 11 },
  { eventId: 3, userId: 12 },
  { eventId: 4, userId: 13 },
  { eventId: 5, userId: 14 },
  { eventId: 6, userId: 15 },
  { eventId: 7, userId: 16 },
  { eventId: 8, userId: 17 },
  { eventId: 2, userId: 18 },

  { eventId: 36, userId: 1 },
  { eventId: 15, userId: 1 },
  { eventId: 5, userId: 1 },
  { eventId: 19, userId: 1 },
  { eventId: 20, userId: 1 },

];

module.exports = {
  eventsData,
  ticketsData,
  favoritesData
}