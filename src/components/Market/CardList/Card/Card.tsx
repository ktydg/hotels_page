import { useState, useContext } from 'react'
import { Flex, Text, Button, Image } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import type { ICard } from '@/types'
import { Rating } from './Rating'
import { Place } from './Place'
import { Author } from './Author'
import { CardLabel } from './CardLabel'
import { Like } from './Like'
import { pickCardBackground } from '@/utility'
import classes from './Card.module.css'
import { Context } from '@/context'

export const Card = ({ card }: { card: ICard }) => {
	const id = card.id.toString()
	const context = useContext(Context)
	if (!context) {
		throw new Error('No context provider')
	}
	const [liked, setLiked] = useState(false)
	const [isInCart, setIsInCart] = useState(Boolean(localStorage.getItem(id)))

	const handleAddToCart = () => {
		if (isInCart) {
			setIsInCart(false)
			localStorage.removeItem(id)
		} else {
			setIsInCart(true)
			localStorage.setItem(id, card.placeName)
		}
		context.setCartItems(localStorage.length)
	}

	const handleLike = () => {
		setLiked(!liked)
	}

	return (
		<Flex
			pos='relative'
			bg={pickCardBackground(card.type)}
			className={classes.card}
		>
			<CardLabel type={card.type} />
			<Like liked={liked} handleLike={handleLike} />

			<Image h={200} radius={12} src={card.placePicture} />
			<Flex h='100%' gap={14} direction='column' justify='space-between'>
				<Flex gap={4} direction='column'>
					<Rating
						hotelStars={card.hotelStars}
						buildings={card.buildings}
						rating={card.rating}
						reviews={card.reviews}
					/>
					<Place
						placeName={card.placeName}
						oldPlaceName={card.oldPlaceName}
						location={card.location}
					/>
					<Author author={card.author} />
				</Flex>

				<Flex justify='space-between'>
					<Text fw={700} fz='26px' lh='36px'>
						{card.price}
					</Text>
					<Button
						h={44}
						radius={12}
						p={isInCart ? '8px 24px 8px 10px' : '8px 24px'}
						c='black'
						bg={isInCart ? 'rgba(255, 224, 134, 1)' : 'var(--primary-yellow)'}
						onClick={handleAddToCart}
						leftSection={isInCart ? <IconCheck size={20} /> : undefined}
					>
						{isInCart ? 'В Корзине' : 'В корзину'}
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}
