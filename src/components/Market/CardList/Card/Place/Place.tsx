import { Flex, Text } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'

export const Place = ({
	placeName,
	oldPlaceName,
	location,
}: {
	placeName: string
	oldPlaceName?: string
	location: string
}) => {
	return (
		<Flex direction='column' gap={4}>
			<Flex direction='column'>
				<Text
					mah={42}
					fw={700}
					fz='18px'
					lh='26px'
					style={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}
				>
					{placeName}
				</Text>
				{Boolean(oldPlaceName) && (
					<Text fw={400} fz='12px' lh='16px' c='rgba(125, 125, 125, 1)'>
						Ранее: {oldPlaceName}
					</Text>
				)}
			</Flex>
			<Flex gap={4} align='center'>
				<IconMapPin size={16} color='rgba(107, 107, 107, 1)' />
				<Text
					fw={400}
					fz='14px'
					lh='20px'
					c='rgba(107, 107, 107, 1)'
					style={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}
				>
					{location}
				</Text>
			</Flex>
		</Flex>
	)
}
