//import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Slogan from '../components/slogan'
import Welcome from '../components/welcome'
import Translation from '../components/translation'
import Proofreading from '../components/proofreading'
import PresentationCoaching from '../components/presentation-coaching'
//import FullPage from '../components/fullpage'

const siteTitle = 'YUZEN Translation'
const siteDescription =
	'Translation company based in Tokyo - Trust in us to take care of all your translation needs.'
const siteKeywords =
	'translation, yuzen, translating, translate, coaching, presentation, proofreading, language, Japanese, English'
const siteURL = 'https://yuzentranslation.com'

const MainApp = () => (
	<>
		<Head
			title={siteTitle}
			description={siteDescription}
			keywords={siteKeywords}
			url={siteURL}
		/>
		<Nav />
		<div>
			<Slogan />
			<Welcome />
			<Translation />
			<Proofreading />
			<PresentationCoaching />
		</div>
		<Footer />
	</>
)

export default MainApp
