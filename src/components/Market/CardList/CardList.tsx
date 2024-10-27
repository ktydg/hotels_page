import { useState, useEffect } from 'react'
import { Flex } from '@mantine/core'
import { mockCards } from './MockCards'
import { Card } from './Card'
import { CardListSkeleton } from './CardListSkeleton'
import type { ICard } from '@/types'

const useMockFetch = () => {
	const [data, setData] = useState<ICard[] | null>(null)
	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		const fetchData = () => {
			setIsPending(true)

			setTimeout(() => {
				setData(mockCards)
				setIsPending(false)
			}, 3000)
		}

		fetchData()
	}, [])

	return { data, isPending }
}

export const CardList = () => {
	// Pretending Fetching...
	const { data, isPending } = useMockFetch()

	return (
		<Flex gap={28} rowGap={48} wrap='wrap' justify='center'>
			{!isPending ? (
				data?.map((card) => <Card card={card} key={card.id} />)
			) : (
				<CardListSkeleton />
			)}
		</Flex>
	)
}
