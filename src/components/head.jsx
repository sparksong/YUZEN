import NextHead from 'next/head'
import {
	SITE_TITLE,
	SITE_URL,
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
} from '../utils/constants'

const defaultEmptyValue = ''

const Head = () => (
	<NextHead>
		<meta charSet='UTF-8' />
		<title>{SITE_TITLE || defaultEmptyValue}</title>
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta
			name='description'
			content={SITE_DESCRIPTION || defaultEmptyValue}
		/>
		<meta name='keywords' content={SITE_KEYWORDS || defaultEmptyValue} />
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
		/>
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/icon?family=Material+Icons'
		/>
		<meta property='og:url' content={SITE_URL || defaultEmptyValue} />
		<meta property='og:title' content={SITE_TITLE || defaultEmptyValue} />
		<meta
			property='og:description'
			content={SITE_DESCRIPTION || defaultEmptyValue}
		/>
		<meta property='og:image' content='../assets/ayge.jpg' />
	</NextHead>
)

export default Head
