
import { UserProfile, Adventure } from './types.ts';

export const MOCK_PROFILES: UserProfile[] = [
  {
    id: '1',
    name: 'Julie',
    age: 28,
    type: 'BOTH',
    bio: 'Passionnée de virées en montagne et de bivouacs sauvages. Je roule en Tiger 900.',
    location: 'Annecy, FR',
    avatar: 'https://picsum.photos/id/1027/400/600',
    bike: 'Triumph Tiger 900',
    hikeLevel: 'Expert',
    tags: ['Off-road', 'Camping', 'Photographie']
  },
  {
    id: '2',
    name: 'Thomas',
    age: 32,
    type: 'MOTO',
    bio: 'Fou de vitesse et de belles courbes. Toujours prêt pour une balade dominicale.',
    location: 'Lyon, FR',
    avatar: 'https://picsum.photos/id/1005/400/600',
    bike: 'Ducati Panigale V4',
    tags: ['Vitesse', 'Café Racer', 'Roadtrip']
  },
  {
    id: '3',
    name: 'Sarah',
    age: 25,
    type: 'HIKE',
    bio: 'La nature est ma thérapie. Je cherche des compagnons pour le GR20.',
    location: 'Grenoble, FR',
    avatar: 'https://picsum.photos/id/1012/400/600',
    hikeLevel: 'Expert',
    tags: ['Trekking', 'Flore', 'Montagne']
  },
  {
    id: '4',
    name: 'Marc',
    age: 35,
    type: 'BOTH',
    bio: 'Trail rider la semaine, randonneur le week-end. L\'aventure avant tout.',
    location: 'Nice, FR',
    avatar: 'https://picsum.photos/id/1011/400/600',
    bike: 'BMW R1250GS',
    hikeLevel: 'Intermédiaire',
    tags: ['Aventure', 'Pêche', 'Cartographie']
  }
];

export const MOCK_ADVENTURES: Adventure[] = [
  {
    id: 'adv1',
    title: 'Boucle du Vercors',
    type: 'MOTO',
    date: '15 Mai 2024',
    location: 'Vercors',
    description: 'Une journée de roulage intense à travers les cols mythiques du Vercors.',
    creatorId: '2',
    participants: 5
  },
  {
    id: 'adv2',
    title: 'Sommet du Mont Buet',
    type: 'HIKE',
    date: '22 Juin 2024',
    location: 'Sixt-Fer-à-Cheval',
    description: 'Ascension technique pour randonneurs confirmés. Panorama exceptionnel sur le Mont-Blanc.',
    creatorId: '3',
    participants: 3
  }
];
