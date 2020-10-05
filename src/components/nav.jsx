import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {
	return (
		<div className='navbar_container'>
			<div className='navbar_logo'>
				<AnchorLink offset='100' href='#welcome'>
					<p>YUZEN Translation LLC</p>
				</AnchorLink>
			</div>
			<div className='navbar_links'>
				<AnchorLink offset='100' href='#translation'>
					Translation
				</AnchorLink>
				<AnchorLink offset='100' href='#proofreading'>
					Proofreading
				</AnchorLink>
				<AnchorLink offset='100' href='#presentation'>
					Presentation Coaching
				</AnchorLink>
				{/* <AnchorLink offset='100' href='#presentation'>
					Contact Us
				</AnchorLink> */}
				<a href='http://yuzentranslation.com/wordpress/'>Blog</a>
			</div>
		</div>
	)
}

export default Nav
