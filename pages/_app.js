import '../styles/globals.css'
import TopMenu from '../components/TopMenu/TopMenu'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<TopMenu />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
