import { useContext, useState, useEffect } from 'react'
import {
	Indicator,
	ActionIcon,
	Popover,
	Box,
	CloseButton,
	Text,
	Flex,
} from '@mantine/core'
import { IconShoppingCart } from '@tabler/icons-react'
import { Context } from '@/context'
import type { CartList } from '@/types'

const getAllLocalStorageItems = () => {
	const items = []

	// Loop through all keys in localStorage
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i) ?? ''
		const value = localStorage.getItem(key) ?? ''
		items.push({ id: key, ...JSON.parse(value) }) // Parse if the value is JSON string
	}

	return items
}

export const Cart = () => {
	const context = useContext(Context)
	if (!context) {
		throw new Error('No context provider')
	}
	const cartAmount = context.cartItems <= 99 ? context.cartItems : '99+'
	const [cart, setCart] = useState(getAllLocalStorageItems())

	useEffect(() => {
		setCart(getAllLocalStorageItems())
	}, [context.cartItems])

	const handleRemoveFromCart = (id: string) => {
		localStorage.removeItem(id)
		context.setCartItems(localStorage.length)
		setCart(getAllLocalStorageItems())
	}

	return (
		<Popover
			width={300}
			position='bottom-end'
			offset={13}
			withArrow
			arrowSize={12}
			arrowOffset={50}
		>
			<Popover.Target>
				<Indicator
					label={cartAmount}
					radius='12px'
					disabled={!cartAmount}
					size={22}
					offset={12}
					color='var(--primary-yellow)'
					styles={{
						indicator: {
							padding: '2px',
							border: '2px solid white',
							fontWeight: 600,
							fontSize: '12px',
							lineHeight: '16px',
							color: 'black',
						},
					}}
				>
					<ActionIcon
						variant='transparent'
						color='black'
						aria-label='Показать корзину'
						size='xl'
					>
						<IconShoppingCart size={26} />
					</ActionIcon>
				</Indicator>
			</Popover.Target>
			<Popover.Dropdown>
				{cart.length ? (
					cart.map((item: CartList) => (
						<Flex
							miw={200}
							key={item.id}
							align='center'
							justify='space-between'
						>
							<Box>
								<Text
									maw={200}
									fw={700}
									style={{
										textOverflow: 'ellipsis',
										overflow: 'hidden',
										whiteSpace: 'nowrap',
									}}
								>
									{item.placeName}
								</Text>
								<Text
									maw={200}
									style={{
										textOverflow: 'ellipsis',
										overflow: 'hidden',
										whiteSpace: 'nowrap',
									}}
								>
									{item.price}
								</Text>
							</Box>
							<CloseButton onClick={() => handleRemoveFromCart(item.id)} />
						</Flex>
					))
				) : (
					<Text>{'Пока ничего нет :('}</Text>
				)}
			</Popover.Dropdown>
		</Popover>
	)
}
