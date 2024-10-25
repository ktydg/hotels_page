import React from 'react'
import {
	Group,
	Container,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
	ActionIcon,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBell, IconShoppingCart } from '@tabler/icons-react'
import classes from './Header.module.css'

const Header = () => {
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
		<Box pb={168}>
			<header className={classes.header}>
				<Container size='1268px' p={0} className={classes.content}>
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
					<Group gap={6} visibleFrom='sm'>
						<ActionIcon
							variant='transparent'
							color='black'
							aria-label='Показать уведомления'
							size='xl'
						>
							<IconBell size={26} />
						</ActionIcon>
						<ActionIcon
							variant='transparent'
							color='black'
							aria-label='Показать корзину'
							size='xl'
						>
							<IconShoppingCart size={26} />
						</ActionIcon>
						<a className={classes.avatar} href='#'>
							<img className={classes.avatar} src={data.avatar} />
						</a>
					</Group>

					{/* Mobile */}
					<Group gap={6} hiddenFrom='sm'>
						<a className={classes.avatar} href='#'>
							<img className={classes.avatar} src={data.avatar} />
						</a>
						<ActionIcon
							variant='transparent'
							color='black'
							aria-label='Показать уведомления'
							size='xl'
						>
							<IconBell size={26} />
						</ActionIcon>
						<ActionIcon
							variant='transparent'
							color='black'
							aria-label='Показать корзину'
							size='xl'
						>
							<IconShoppingCart size={26} />
						</ActionIcon>
					</Group>
					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						hiddenFrom='sm'
					/>
				</Container>
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
