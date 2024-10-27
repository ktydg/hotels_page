import { Button } from '@mantine/core'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'

export const Like = ({
	liked,
	handleLike,
}: {
	liked: boolean
	handleLike: () => void
}) => {
	return (
		<Button
			pos='absolute'
			right={28}
			top={28}
			h={44}
			w={44}
			p={0}
			radius={12}
			bg='rgba(21, 26, 36, 0.4)'
			onClick={handleLike}
		>
			{liked ? (
				<IconHeartFilled size={18} color='red' />
			) : (
				<IconHeart size={18} />
			)}
		</Button>
	)
}
