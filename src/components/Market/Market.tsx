import React from 'react'
import { Title, Flex } from '@mantine/core'
import { Search } from './Search'
import { CardList } from './CardList'

const Market = () => {
	return (
		<main>
			<Flex w='1268px' direction='column' m='auto' gap={24}>
				<Title size={40} order={1}>
					Онлайн-маркет
				</Title>
				<Search />
				<CardList />
			</Flex>
		</main>
	)
}

export default React.memo(Market)
