import { useState } from 'react'
import { Input, Text, Flex, Box, Button, CloseButton } from '@mantine/core'
import classes from './Filter.module.css'

export const Filter = ({
	setFilter,
}: {
	setFilter: React.Dispatch<React.SetStateAction<string>>
}) => {
	const [value, setValue] = useState('')

	const handleClear = () => {
		setValue('')
		setFilter('')
	}

	const handleFilter = () => {
		setFilter(value)
	}

	return (
		<Flex className={classes.filter}>
			<Box>
				<Text h={28} pb={4} className={classes.filter_label}>
					Поиск
				</Text>
				<Input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					radius={12}
					py={6}
					placeholder='Введите название отеля, страны, курорта, рекламника'
					rightSectionPointerEvents='all'
					rightSection={
						<CloseButton
							aria-label='Очистить поиск'
							onClick={handleClear}
							style={{ display: value ? undefined : 'none' }}
						/>
					}
					styles={{
						input: {
							height: '42px',
							padding: '0 12px',
						},
					}}
				/>
			</Box>
			<Box className={classes.buttons}>
				<Button
					w={220}
					h={52}
					radius={12}
					variant='outline'
					bd='3px solid var(--primary-yellow)'
					color='black'
					onClick={handleFilter}
				>
					Поиск
				</Button>
			</Box>
		</Flex>
	)
}
