import '../styles/globals.css'
import TopNav from '../components/TopNav/TopNav'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<TopNav />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
