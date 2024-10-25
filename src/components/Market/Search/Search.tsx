import { Input, Text, Box } from '@mantine/core'
import classes from './Search.module.css'

export const Search = () => {
	return (
		<Box className={classes.search}>
			<Text h={28} pb={4}>Поиск</Text>
			<Input
        radius='md'
        h={42}
				placeholder='Введите название отеля, страны, курорта, рекламника'
			/>
		</Box>
	)
}
