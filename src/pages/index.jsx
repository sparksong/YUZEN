import Head from '../components/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ReactFullpage from '@fullpage/react-fullpage'
import Section from '../components/section'
import {
	sloganProps,
	welcomeProps,
	translationProps,
	proofreadingProps,
	presentationProps,
} from '../utils/section-props'
import { FULL_PAGE_KEY, ANCHOR_LIST } from '../utils/constants'

const MainApp = () => (
	<ReactFullpage
		licenseKey={FULL_PAGE_KEY}
		scrollingSpeed={1000}
		fixedElements={'.navbar_container'}
		anchors={ANCHOR_LIST}
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<Head />
					<NavBar />
					<div>
						<Section {...sloganProps} />
						<Section {...welcomeProps} />
						<Section {...translationProps} />
						<Section {...proofreadingProps} />
						<Section {...presentationProps} />
						<Footer />
					</div>
				</ReactFullpage.Wrapper>
			)
		}}
	/>
)

export default MainApp
