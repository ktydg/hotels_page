import type { CardType } from '@/types'

export const pickCardLabelBackground = (type: CardType): string => {
  switch (type) {
    case 'Видеообзор':
      return 'rgba(255, 224, 134, 0.8)'
    case 'Онлайн-рекламник':
      return 'rgba(18, 119, 135, 0.8)'
    default:
      return 'white'
  }
}

export const pickCardLabelColor = (type: CardType): string => {
  switch (type) {
    case 'Онлайн-рекламник':
      return 'white'
    default:
      return 'black'
  }
}

export const pickCardBackground = (type: CardType): string => {
  switch (type) {
    case 'Видеообзор':
      return 'linear-gradient(180deg, rgba(252, 206, 71, 0.6) 7.81%, rgba(255, 255, 255, 0) 48.44%)'
    case 'Онлайн-рекламник':
      return 'linear-gradient(180deg, rgba(23, 149, 168, 0.6) 2.64%, rgba(255, 255, 255, 0) 41.23%)'
    default:
      return 'white'
  }
}