import Head from '../components/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Slogan from '../components/slogan'
import Welcome from '../components/welcome'
import Translation from '../components/translation'
import Proofreading from '../components/proofreading'
import PresentationCoaching from '../components/presentation-coaching'
import ReactFullpage from '@fullpage/react-fullpage'

const siteTitle = 'YUZEN Translation'
const siteDescription =
	'Translation company based in Tokyo - Trust in us to take care of all your translation needs.'
const siteKeywords =
	'translation, yuzen, translating, translate, coaching, presentation, proofreading, language, Japanese, English'
const siteURL = 'https://yuzentranslation.com'

const MainApp = () => (
	<ReactFullpage
		licenseKey={'71B7E327-972A4E81-AFC390EB-96593BFC'}
		scrollingSpeed={1000}
		fixedElements={'.navbar_container'}
		anchors={[
			'main',
			'about',
			'translation',
			'proofreading',
			'presentationcoaching',
		]}
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<Head
						title={siteTitle}
						description={siteDescription}
						keywords={siteKeywords}
						url={siteURL}
					/>
					<NavBar />
					<div>
						<Slogan />
						<Welcome />
						<Translation />
						<Proofreading />
						<PresentationCoaching />
						<Footer />
					</div>
				</ReactFullpage.Wrapper>
			)
		}}
	/>
)

export default MainApp
