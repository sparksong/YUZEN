import '../components/app.css'
import 'bootstrap/dist/css/bootstrap.css'
// import App from 'next/app'

function MyApp({
    Component,
    pageProps
}) {
    return <Component {
        ...pageProps
    }
    />
}

export default MyApp