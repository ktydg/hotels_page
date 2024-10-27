import { Input, Text, Flex, Box, Button } from '@mantine/core'
import classes from './Filter.module.css'

export const Filter = () => {
	return (
		<Flex className={classes.filter}>
			<Box>
				<Text h={28} pb={4} className={classes.filter_label}>
					Поиск
				</Text>
				<Input
					radius={12}
					h={42}
					placeholder='Введите название отеля, страны, курорта, рекламника'
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
				>
					Поиск
				</Button>
			</Box>
		</Flex>
	)
}
