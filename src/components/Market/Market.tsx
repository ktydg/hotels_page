import React, { useState, useMemo } from 'react'
import { Title, Flex, ComboboxItem } from '@mantine/core'
import { Filter } from './Filter'
import { CardList } from './CardList'
import { Sort } from './Sort'

const Market = () => {
	const [sort, setSort] = useState<ComboboxItem | null>(null)
	const [filter, setFilter] = useState<string>('')

	const sortData = useMemo(
		() => [
			{ value: 'rating', label: 'по рейтингу' },
			{ value: 'expensive', label: 'по цене (сначала дешевле)' },
			{ value: 'cheap', label: 'по цене (сначала дорогие)' },
			{ value: 'date', label: 'по дате добавления' },
			{ value: 'Онлайн-рекламник', label: 'сначала онлайн-рекламники' },
			{ value: 'Видеообзор', label: 'сначала видеообзоры' },
		],
		[]
	)

	return (
		<main style={{ marginBottom: '100px' }}>
			<Flex direction='column' gap={24}>
				<Title size={40} order={1}>
					Онлайн-маркет
				</Title>
				<Filter setFilter={setFilter} />
				<Sort value={sort} setValue={setSort} data={sortData} />
				<CardList sort={sort} filter={filter} />
			</Flex>
		</main>
	)
}

export default React.memo(Market)
