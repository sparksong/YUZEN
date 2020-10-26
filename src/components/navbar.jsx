import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
	return (
		<>
			{/*<Navbar bg='primary' variant='dark' className='navbar_container'>
				<Navbar.Brand href='#slide1'>
					YUZEN Translation LLC
				</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#slide2'>About</Nav.Link>
					<Nav.Link href='#slide3'>Translation</Nav.Link>
					<Nav.Link href='#slide4'>Proofreading</Nav.Link>
					<Nav.Link href='#slide5'>Presentation Coaching</Nav.Link>
				</Nav>
			</Navbar>*/}
			<Navbar
				collapseOnSelect
				expand='sm'
				variant='dark'
				className='navbar_container'
			>
				<Navbar.Brand href='#slide1'>
					YUZEN Translation LLC
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link href='#slide2'>About</Nav.Link>
						<Nav.Link href='#slide3'>Translation</Nav.Link>
						<Nav.Link href='#slide4'>Proofreading</Nav.Link>
						<Nav.Link href='#slide5'>
							Presentation Coaching
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
