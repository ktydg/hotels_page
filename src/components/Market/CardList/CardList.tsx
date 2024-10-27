import { useState, useEffect } from 'react'
import { Flex, Pagination, ComboboxItem } from '@mantine/core'
import { mockCards } from './MockCards'
import { Card } from './Card'
import { CardListSkeleton } from './CardListSkeleton'
import type { ICard } from '@/types'
import { sortCards } from '@/utility'

const useMockFetch = () => {
	const [response, setResponse] = useState<{
		data: ICard[]
	}>({ data: [] })

	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		const fetchData = () => {
			setIsPending(true)

			setTimeout(() => {
				setResponse({
					data: mockCards,
				})
				setIsPending(false)
			}, 3000)
		}

		fetchData()
	}, [])

	return { response, isPending }
}

export const CardList = ({
	sort,
	filter,
}: {
	sort: ComboboxItem | null
	filter: string
}) => {
	// Pretending Fetching...
	const { response, isPending } = useMockFetch()
	const [page, setPage] = useState(1)

	const sorted = response.data.sort(sortCards(sort?.value))
	const filtered = sorted.filter((card) =>
		card.placeName.toLowerCase().includes(filter.toLowerCase())
	)
	const pages = Math.ceil(filtered.length / 6)
	const paged = filtered.reduce<ICard[][]>((result, item, index) => {
		const chunkIndex = Math.floor(index / 6)
		if (!result[chunkIndex]) {
			result[chunkIndex] = []
		}
		result[chunkIndex].push(item)

		return result
	}, [])

	return (
		<>
			<Flex gap={28} rowGap={48} wrap='wrap' justify='center'>
				{!isPending ? (
					paged[page - 1].map((card) => <Card card={card} key={card.id} />)
				) : (
					<CardListSkeleton />
				)}
			</Flex>
			{Boolean(pages) && (
				<Pagination
					total={pages}
					value={page}
					onChange={setPage}
					size={40}
					radius={20}
					color='var(--primary-yellow)'
					styles={{
						control: {
							fontWeight: 500,
							fontSize: '16px',
							lineHeight: '19.36px',
							color: 'black',
						},
					}}
				/>
			)}
		</>
	)
}
