import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {
	return (
		<div className='navbar_container'>
			<div className='navbar_logo'>
				<a href='#slide1'>
					<p>YUZEN Translation LLC</p>
				</a>
			</div>
			<div className='navbar_links'>
				<a href='#slide2'>
					About
				</a>
				<a href='#slide3'>
					Translation
				</a>
				<a href='#slide4'>
					Proofreading
				</a>
				<a href='#slide5'>
					Presentation Coaching
				</a>
				{/* <AnchorLink offset='100' href='#presentation'>
					Contact Us
				</AnchorLink> */}
				<a href='http://yuzentranslation.com/wordpress/'>Blog</a>
			</div>
		</div>
	)
}

export default Nav
