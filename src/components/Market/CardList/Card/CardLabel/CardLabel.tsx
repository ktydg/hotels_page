import { Text } from '@mantine/core'
import classes from './CardLabel.module.css'
import type { CardType } from '@/types'
import { pickCardLabelBackground, pickCardLabelColor } from '@/utility'

export const CardLabel = ({ type }: { type: CardType }) => {
	return (
		<Text
			bg={pickCardLabelBackground(type)}
			c={pickCardLabelColor(type)}
			className={classes.card_label}
		>
			{type}
		</Text>
	)
}
