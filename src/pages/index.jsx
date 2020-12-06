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
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const MainApp = function () {
	const [isJapanese, setIsJapanese] = useState(true)
	const languageSwitch = () => {
		let newValue = !isJapanese
		setIsJapanese(newValue)
	}

	return (
		<ReactFullpage
			licenseKey={FULL_PAGE_KEY}
			scrollingSpeed={1000}
			fixedElements={'.navbar_container, .translate-button'}
			anchors={ANCHOR_LIST}
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<Head />
						<NavBar {...{ isJapanese: isJapanese }} />
						<Button
							variant='outline-light'
							className='translate-button'
							onClick={languageSwitch}
						>
							{isJapanese ? 'English' : 'Japanese'}
						</Button>
						<div>
							<Section
								{...{
									...sloganProps,
									isJapanese: isJapanese,
								}}
							/>
							<Section
								{...{
									...welcomeProps,
									isJapanese: isJapanese,
								}}
							/>
							<Section
								{...{
									...translationProps,
									isJapanese: isJapanese,
								}}
							/>
							<Section
								{...{
									...proofreadingProps,
									isJapanese: isJapanese,
								}}
							/>
							<Section
								{...{
									...presentationProps,
									isJapanese: isJapanese,
								}}
							/>
							<Footer />
						</div>
					</ReactFullpage.Wrapper>
				)
			}}
		/>
	)
}

export default MainApp
