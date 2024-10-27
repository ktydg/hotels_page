import type { ICard } from '@/types'

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
};

export const sortCards = (sort?: string) => {
  let algorithm;
  switch (sort) {
    case 'rating':
      algorithm = (first: ICard, second: ICard) =>
        (second.rating ?? 0) - (first.rating ?? 0)
      break;
    case 'expensive':
      algorithm = (first: ICard, second: ICard) =>
        +(first.price.split(' ')[0]) - +(second.price.split(' ')[0])
      break;
    case 'cheap':
      algorithm = (first: ICard, second: ICard) =>
        +(second.price.split(' ')[0]) - +(first.price.split(' ')[0])
      break;
    case 'date':
      algorithm = (first: ICard, second: ICard) =>
        (parseDate(second.author.reviewDate).getTime() - parseDate(first.author.reviewDate).getTime());
      break;
    case 'Онлайн-рекламник':
      algorithm = (first: ICard) => first.type === 'Онлайн-рекламник' ? -1 : 1
      break;
    case 'Видеообзор':
      algorithm = (first: ICard) => first.type === 'Видеообзор' ? -1 : 1
      break;
    default:
      algorithm = () => 0
      break;
  }

  return algorithm
}