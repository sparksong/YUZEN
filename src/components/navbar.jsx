import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {
	return (
		<Navbar
			collapseOnSelect
			expand='md'
			className='navbar_container'
			variant='dark'
		>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Nav.Link href='#main'>YUZEN Translation LLC</Nav.Link>
					<Nav.Link href='#about'>
						{props.isJapanese ? 'アバウト' : 'About'}
					</Nav.Link>
					<Nav.Link href='#translation'>
						{props.isJapanese ? '翻訳' : 'Translation'}
					</Nav.Link>
					<Nav.Link href='#proofreading'>
						{props.isJapanese ? '英文校正' : 'Proofreading'}
					</Nav.Link>
					<Nav.Link href='#presentationcoaching'>
						{props.isJapanese
							? 'プレゼンコーチング'
							: 'Presentation Coaching'}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar
