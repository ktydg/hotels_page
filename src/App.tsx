import { lazy, Suspense } from 'react'

const Header = lazy(() => import('./components/Header'))
const Market = lazy(() => import('./components/Market'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
	return (
		<>
			<Suspense fallback={null}>
				<Header />
			</Suspense>
			<Suspense>
				<Market />
			</Suspense>
			<Suspense fallback={null}>
				<Footer />
			</Suspense>
		</>
	)
}

export default App
