export type CardType = 'Видеообзор' | 'Онлайн-рекламник';

export interface ICard {
  id: number;
  type: CardType;
  hotelStars?: number;
  buildings?: number;
  placeName: string;
  oldPlaceName?: string;
  placePicture: string;
  location: string;
  rating?: number;
  reviews?: number;
  author: {
    name: string;
    picture?: string;
    reviewDate: string;
  }
  price: string;
}
