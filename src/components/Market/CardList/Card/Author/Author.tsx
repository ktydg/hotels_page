import { Flex, Text, Avatar } from '@mantine/core'

export const Author = ({
	author,
}: {
	author: { picture?: string; name: string; reviewDate: string }
}) => {
	return (
		<Flex gap={8} align='center'>
			<Avatar
				size={44}
				color='var(--primary-yellow)'
				src={author.picture}
				alt='Аватар'
			>
				{author.picture ?? author.name[0]}
			</Avatar>
			<Flex direction='column'>
				<Text
					w='100%'
					h={20}
					fw={600}
					fz='14px'
					lh='20px'
					style={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}
				>
					{author.name}
				</Text>
				<Text fw={400} fz='12px' lh='16px' c='rgba(134, 142, 150, 1)'>
					Опубликовано {author.reviewDate}
				</Text>
			</Flex>
		</Flex>
	)
}
