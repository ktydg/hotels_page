import { lazy, Suspense, useState } from 'react'
import { ContentLayout } from '@/components/ContentLayout'
import Footer from '@/components/Footer'
import { Context } from '@/context'

const Header = lazy(() => import('@/components/Header'))
const Market = lazy(() => import('@/components/Market'))

function App() {
	const [cartItems, setCartItems] = useState(localStorage.length)

	return (
		<Context.Provider value={{ cartItems, setCartItems }}>
			<ContentLayout>
				<Suspense fallback={null}>
					<Header />
				</Suspense>
				<Suspense>
					<Market />
				</Suspense>
			</ContentLayout>
			<Footer />
		</Context.Provider>
	)
}

export default App
