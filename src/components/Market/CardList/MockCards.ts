import type { ICard } from '@/types'

export const mockCards: ICard[] = [
  {
    id: 1,
    type: 'Видеообзор',
    hotelStars: 5,
    placeName: 'Sunny Beach Resort',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/d9b55a236e8730d29ceb80b025f77c1483bd2340',
    location: 'California, USA',
    rating: 4.5,
    reviews: 220,
    author: {
      reviewDate: '12.12.2024',
      name: 'Jane Doe',
    },
    price: '150 ₽',
  },
  {
    id: 2,
    type: 'Онлайн-рекламник',
    hotelStars: 5,
    placeName: 'Mountain Escape Hotel',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/2ae074e5792aedd59aed8bea7c9e34b93e3a175c',
    location: 'Colorado, USA',
    rating: 4.8,
    reviews: 80,
    author: {
      reviewDate: '12.12.2024',
      name: 'John Smith',
      picture: 'https://avatars.githubusercontent.com/u/74158983?s=96&v=4',
    },
    price:'220 ₽',
  },
  {
    id: 3,
    type: 'Видеообзор',
    buildings: 3,
    placeName: 'City Lights Hotel',
    oldPlaceName: 'Metro Hotel',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'New York, USA',
    author: {
      reviewDate: '12.12.2024',
      name: 'Emma Brown',
    },
    price: '180 $',
  },
  {
    id: 4,
    type: 'Видеообзор',
    placeName: 'Blue Lagoon Resort Resort Resort Resort Resort Resort Resort Resort Resort Resort ResortResortResortResortResortResortResortResortResortResortResort',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/a9c5376929db7e408810023d5ad6e685eb0bd081',
    location: 'Florida, USA',
    rating: 4.6,
    reviews: 310,
    author: {
      reviewDate: '12.12.2024',
      name: 'Liam Wilson',
    },
    price: '175 $',
  },
  {
    id: 5,
    type: 'Онлайн-рекламник',
    buildings: 2,
    placeName: 'Desert Oasis Inn',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/d8afa597186021f56ba2badecccdabd15c200a97',
    location: 'Nevada, USA',
    rating: 4.1,
    author: {
      reviewDate: '12.12.2024',
      name: 'Olivia Thomas',
    },
    price: '130 $',
  },
  {
    id: 6,
    type: 'Видеообзор',
    buildings: 4,
    placeName: 'Coastal Retreat',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Oregon, USA',
    rating: 4.9,
    reviews: 200,
    author: {
      reviewDate: '12.12.2024',
      name: 'James Anderson',
      picture: 'https://avatars.githubusercontent.com/u/74158983?s=96&v=4',
    },
    price: '190 $',
  },
  {
    id: 7,
    type: 'Онлайн-рекламник',
    buildings: 6,
    placeName: 'Urban Stay',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Chicago, USA',
    rating: 3.9,
    reviews: 180,
    author: {
      reviewDate: '12.12.2024',
      name: 'Sophia Lee',
    },
    price: '120 $',
  },
  {
    id: 8,
    type: 'Видеообзор',
    hotelStars: 5,
    placeName: 'Lakefront Luxury',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Michigan, USA',
    rating: 4.7,
    reviews: 150,
    author: {
      reviewDate: '12.12.2024',
      name: 'William Brown',
    },
    price: '250 $',
  },
  {
    id: 9,
    type: 'Онлайн-рекламник',
    hotelStars: 3,
    placeName: 'Forest Cabin',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Washington, USA',
    rating: 4.3,
    reviews: 60,
    author: {
      reviewDate: '12.12.2024',
      name: 'Ava Davis',
    },
    price: '140 $',
  },
  {
    id: 10,
    type: 'Видеообзор',
    buildings: 2,
    placeName: 'Snowy Peaks Hotel',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Montana, USA',
    rating: 4.4,
    reviews: 130,
    author: {
      reviewDate: '12.12.2024',
      name: 'Henry Wilson',
    },
    price: '160 $',
  },
  {
    id: 11,
    type: 'Онлайн-рекламник',
    hotelStars: 4,
    placeName: 'Urban Nights Hotel',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'New York, USA',
    rating: 4.5,
    reviews: 105,
    author: {
      reviewDate: '12.12.2024',
      name: 'Mia Turner',
    },
    price: '210 $',
  },
  {
    id: 12,
    type: 'Видеообзор',
    hotelStars: 5,
    placeName: 'Seaside Retreat',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Florida, USA',
    rating: 4.2,
    reviews: 90,
    author: {
      reviewDate: '12.12.2024',
      name: 'Noah White',
    },
    price: '200 $',
  },
  {
    id: 13,
    type: 'Онлайн-рекламник',
    buildings: 1,
    placeName: 'Sunny Shores Resort',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Hawaii, USA',
    rating: 4.8,
    reviews: 210,
    author: {
      reviewDate: '12.12.2024',
      name: 'Amelia Taylor',
    },
    price: '240 $',
  },
  {
    id: 14,
    type: 'Видеообзор',
    buildings: 1,
    placeName: 'Mountain Top Lodge',
    oldPlaceName: 'Alpine Lodge',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Colorado, USA',
    rating: 4.6,
    reviews: 75,
    author: {
      reviewDate: '12.12.2024',
      name: 'Ethan Walker',
    },
    price: '170 $',
  },
  {
    id: 15,
    type: 'Онлайн-рекламник',
    hotelStars: 5,
    placeName: 'River View Hotel',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'Louisiana, USA',
    rating: 4.0,
    reviews: 65,
    author: {
      reviewDate: '12.12.2024',
      name: 'Charlotte Green',
    },
    price: '125 $',
  },
  {
    id: 16,
    type: 'Видеообзор',
    hotelStars: 4,
    placeName: 'Ocean Breeze Inn',
    placePicture: 'https://www.figma.com/file/8N7ypzXCYPcWgIt1yu0VmB/image/fb5a206ae06a8c354b4562ecde0626ec04713b0d',
    location: 'California, USA',
    rating: 4.9,
    reviews: 300,
    author: {
      reviewDate: '12.12.2024',
      name: 'Lucas Hall',
    },
    price: '220 $',
  }
];