import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './index.css'

const theme = createTheme({
	fontFamily: 'Open Sans',
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</StrictMode>
)
