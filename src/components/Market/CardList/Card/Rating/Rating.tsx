import { Flex, Text } from '@mantine/core'
import { pluralize } from '@/utility'
import { IconStarFilled } from '@tabler/icons-react'
import classes from './Rating.module.css'

export const Rating = ({
	hotelStars,
	buildings,
	rating,
	reviews,
}: {
	hotelStars?: number
	buildings?: number
	rating?: number
	reviews?: number
}) => {
	return (
		<Flex justify='space-between' fw={600} fz='14px' lh='14px'>
			{hotelStars ? (
				<Flex
					p={4}
					gap={4}
					align='center'
					fw={600}
					fz='12px'
					lh='12px'
					className={classes.gray_bg}
				>
					{Array.from({ length: hotelStars }, (_value, index) => (
						<IconStarFilled size={12} color='black' key={index} />
					))}
					Отель
				</Flex>
			) : (
				<Flex align='center'>
					{pluralize(buildings ?? 0, 'объект', 'объекта', 'объектов')}
				</Flex>
			)}
			<Flex p={4} gap={4} align='center' className={classes.gray_bg}>
				{Boolean(rating) && (
					<Flex pr={5} gap={4} align='center' className={classes.border_right}>
						<IconStarFilled size={14} color='var(--primary-yellow)' />
						<Text fw='inherit' fz='inherit' lh='inherit'>
							{rating}
						</Text>
					</Flex>
				)}
				<Text fw={400} fz='12px' lh='12px' c='rgba(92, 95, 102, 1)'>
					{reviews
						? pluralize(reviews, 'отзыв', 'отзыва', 'отзывов')
						: 'нет отзывов'}
				</Text>
			</Flex>
		</Flex>
	)
}
