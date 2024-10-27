import React, { useContext } from 'react'
import {
	Group,
	Flex,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
	ActionIcon,
	Avatar,
	Indicator,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBell, IconShoppingCart } from '@tabler/icons-react'
import classes from './Header.module.css'
import { Context } from '@/context'

const Header = () => {
	const context = useContext(Context)
	if (!context) {
		throw new Error('No context provider')
	}
	const cartAmount = context.cartItems <= 99 ? context.cartItems : '99+'
	// Pretending Fetching...
	const { data } = (() => {
		return {
			data: {
				cart: {},
				avatar: 'https://avatars.githubusercontent.com/u/74158983?s=96&v=4',
			},
		}
	})()
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false)

	return (
		<Box pb={80}>
			<header className={classes.header}>
				<Flex h={52} my={16} align='center' justify='space-between'>
					{/* Mobile */}
					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						hiddenFrom='sm'
					/>

					{/* Big screen */}
					<Group h='100%' gap={0} visibleFrom='sm'>
						<a href='#' className={classes.link}>
							Онлайн-маркет
						</a>
						<a href='#' className={classes.link}>
							Объекты
						</a>
						<a href='#' className={classes.link}>
							О нас
						</a>
						<a href='#' className={classes.link}>
							Сотрудничество
						</a>
					</Group>
					<Group gap={6}>
						<ActionIcon
							variant='transparent'
							color='black'
							aria-label='Показать уведомления'
							size='xl'
						>
							<IconBell size={26} />
						</ActionIcon>
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
						<a className={classes.avatar} href='#' aria-label='Открыть профиль'>
							<Avatar
								size={42}
								color='var(--primary-yellow)'
								src={data.avatar}
								alt='Аватар'
							/>
						</a>
					</Group>
				</Flex>
			</header>

			{/* Mobile */}
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size='100%'
				padding='md'
				hiddenFrom='sm'
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
					<Divider my='sm' />
					<a href='#' className={classes.link}>
						Онлайн-маркет
					</a>
					<a href='#' className={classes.link}>
						Объекты
					</a>
					<a href='#' className={classes.link}>
						О нас
					</a>
					<a href='#' className={classes.link}>
						Сотрудничество
					</a>
				</ScrollArea>
			</Drawer>
		</Box>
	)
}

export default React.memo(Header)
