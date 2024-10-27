import { Flex } from '@mantine/core'

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Flex maw='var(--max-width)' px={16} direction='column' m='auto'>
			{children}
		</Flex>
	)
}
