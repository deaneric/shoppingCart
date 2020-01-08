export class User {
  name: string;
  email: string;
  mob: number;
  address: string;
}

export class Product {
  id: number;
  name: string;
  format: string;
  genre: string;
  price: number;
  year: number;
  imageUrl: string;
}

export class CartDetails {
  id: number;
  name: string;
  format: string;
  genre: string;
  price: number;
  year: number;
  imageUrl: string;
  quantity: number;
}


export const PRODUCTS: Product[] = [
  { id: 1, name: 'Iron Man', format: 'BluRay', genre: 'Superhero', price: 500, year: 2008, imageUrl: '../assets/images/Posters/IronMan.jpg' },
  { id: 2, name: 'The Incredible Hulk', format: 'BluRay', genre: 'Superhero', price: 500, year: 2008, imageUrl: '../assets/images/Posters/Hulk.jpg' },
  { id: 3, name: 'Iron Man 2', format: 'BluRay', genre: 'Superhero', price: 500, year: 2010, imageUrl: '../assets/images/Posters/IronManTwo.jpg' },
  { id: 4, name: 'Thor', format: 'BluRay', genre: 'Superhero', price: 500, year: 2011, imageUrl: '../assets/images/Posters/Thor.jpg' },
  { id: 5, name: 'Captain America: The First Avenger', format: 'BluRay', genre: 'Superhero', price: 600, year: 2011, imageUrl: '../assets/images/Posters/CaptainAmerica.jpg' },
  { id: 6, name: 'Marvels The Avengers', format: 'BluRay', genre: 'Superhero', price: 600, year: 2012, imageUrl: '../assets/images/Posters/TheAvengers.jpg' },
  { id: 7, name: 'Iron Man 3', format: 'BluRay', genre: 'Superhero', price: 600, year: 2013, imageUrl: '../assets/images/Posters/IronManThree.jpg' },
  { id: 8, name: 'Thor: The Dark World', format: 'BluRay', genre: 'Superhero', price: 600, year: 2013, imageUrl: '../assets/images/Posters/ThorTwo.jpg' },
  { id: 9, name: 'Captain America: The Winter Soldier', format: 'BluRay', genre: 'Superhero', price: 800, year: 2014, imageUrl: '../assets/images/Posters/CaptainAmericaTwo.jpg' },
  { id: 10, name: 'Guardians of the Galaxy', format: 'BluRay', genre: 'Superhero', price: 800, year: 2014, imageUrl: '../assets/images/Posters/GuardiansoftheGalaxy.jpg' },
  { id: 11, name: 'Avengers: Age of Ultron', format: 'BluRay', genre: 'Superhero', price: 800, year: 2015, imageUrl: '../assets/images/Posters/AvengersAgeofUltron.jpg' },
  { id: 12, name: 'Ant-Man', format: 'BluRay', genre: 'Superhero', price: 500, year: 800, imageUrl: '../assets/images/Posters/AntMan.jpg' },
  { id: 13, name: 'Captain America: Civil War', format: '4K', genre: 'Superhero', price: 1000, year: 2016, imageUrl: '../assets/images/Posters/CaptainAmericaCivilWar.jpg' },
  { id: 14, name: 'Doctor Strange', format: '4K', genre: 'Superhero', price: 1000, year: 2016, imageUrl: '../assets/images/Posters/DoctorStrange.jpg' },
  { id: 15, name: 'Guardians of the Galaxy Vol. 2', format: '4K', genre: 'Superhero', price: 1000, year: 2017, imageUrl: '../assets/images/Posters/GuardiansoftheGalaxyVolTwo.jpg' },
  { id: 16, name: 'Spider-Man: Homecoming', format: '4K', genre: 'Superhero', price: 1000, year: 2017, imageUrl: '../assets/images/Posters/SpiderManHomecoming.jpg' },
  { id: 17, name: 'Thor: Ragnarok', format: '4K', genre: 'Superhero', price: 1500, year: 2017, imageUrl: '../assets/images/Posters/ThorRagnarok.jpg' },
  { id: 18, name: 'Black Panther', format: '4K', genre: 'Superhero', price: 1500, year: 2018, imageUrl: '../assets/images/Posters/BlackPanther.jpg' },
  { id: 19, name: 'Avengers: Infinity War', format: '4K', genre: 'Superhero', price: 1500, year: 2018, imageUrl: '../assets/images/Posters/AvengersInfinityWar.jpg' },
  { id: 20, name: 'Ant-Man and the Wasp', format: '4K', genre: 'Superhero', price: 1500, year: 2018, imageUrl: '../assets/images/Posters/AntManAndTheWasp.jpg' },
  { id: 21, name: 'Captain Marvel', format: '4K', genre: 'Superhero', price: 1500, year: 2019, imageUrl: '../assets/images/Posters/CaptainMarvel.jpg' },
  { id: 22, name: 'Avengers: Endgame', format: '4K', genre: 'Superhero', price: 1500, year: 2019, imageUrl: '../assets/images/Posters/AvengersEndgame.jpg' },
  { id: 23, name: 'Spider-Man: Far From Home', format: '4K', genre: 'Superhero', price: 1500, year: 2019, imageUrl: '../assets/images/Posters/SpiderManFarFromHome.jpg' }
];
