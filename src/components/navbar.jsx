import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand='sm'
				className='navbar_container'
				variant='dark'
			>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link href='#main'>YUZEN Translation LLC</Nav.Link>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href='#translation'>Translation</Nav.Link>
						<Nav.Link href='#proofreading'>Proofreading</Nav.Link>
						<Nav.Link href='#presentationcoaching'>
							Presentation Coaching
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
