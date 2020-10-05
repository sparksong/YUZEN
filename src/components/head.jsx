import NextHead from 'next/head'

const defaultDescription = ''
const defaultKeywords = ''
const defaultOGURL = ''

const Head = (props) => (
	<NextHead>
		<meta charSet='UTF-8' />
		<title>{props.title || ''}</title>
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta
			name='description'
			content={props.description || defaultDescription}
		/>
		<meta name='keywords' content={props.keywords || defaultKeywords} />
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
		/>
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/icon?family=Material+Icons'
		/>
		<meta property='og:url' content={props.url || defaultOGURL} />
		<meta property='og:title' content={props.title || ''} />
		<meta
			property='og:description'
			content={props.description || defaultDescription}
		/>
		<meta property='og:image' content='../assets/ayge.jpg' />
	</NextHead>
)

export default Head
