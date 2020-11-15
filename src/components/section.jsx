import parse from 'html-react-parser'

const Section = (props) => {
	return (
		<div
			id={props.id}
			className='section_container section'
			data-anchor={props.anchor}
		>
			<div className='section_text_container'>
				<div className='section_header'>
					<h2>
						{props.isJapanese
							? props.titleJapanese
							: props.titleEnglish}
					</h2>
				</div>
				<div className='section_content'>
					{parse(
						props.isJapanese
							? props.contentJapanese
							: props.contentEnglish
					)}
				</div>
				{props.icons
					?
					props.icons
					:
					<></>}
				{props.arrow
					?
					props.arrow
					:
					<></>}
			</div>
		</div>
	)
}

export default Section
