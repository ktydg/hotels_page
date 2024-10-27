import React, { useState, useMemo } from 'react'
import { Title, Flex, ComboboxItem } from '@mantine/core'
import { Filter } from './Filter'
import { CardList } from './CardList'
import { Sort } from './Sort'

const Market = () => {
	const [value, setValue] = useState<ComboboxItem | null>(null)
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
		<main>
			<Flex direction='column' gap={24}>
				<Title size={40} order={1}>
					Онлайн-маркет
				</Title>
				<Filter />
				<Sort value={value} setValue={setValue} data={sortData} />
				<CardList />
			</Flex>
		</main>
	)
}

export default React.memo(Market)
