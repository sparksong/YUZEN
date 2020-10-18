import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

const Footer = () => {
	return (
		<div className='section fp-auto-height'>
		<div className='footer_container'>
			<div className='social_contact_container'>
				<div className='social_media'>
					<h3>Connect with us</h3>
					<a href='https://www.facebook.com/yuzentranslation/'>
						<FacebookIcon className='social_media_icons'></FacebookIcon>
					</a>
					<a href='https://twitter.com/contact_yuzen'>
						<TwitterIcon className='social_media_icons'></TwitterIcon>
					</a>
					<a href='https://www.linkedin.com/in/yuzen-translation-llc-a69913144/'>
						<LinkedInIcon className='social_media_icons'></LinkedInIcon>
					</a>
				</div>
				<div className='contact_us'>
					<h3>Contact Us</h3>
					<p>
						<EmailIcon className='contact_icons'></EmailIcon>
						contact@yuzentranslation.com
					</p>
					<a href='tel:+8105014071394'>
						<PhoneIcon className='contact_icons'></PhoneIcon>
						(81) 050 1407 1394
					</a>
				</div>
			</div>
			<div className='copyright'>
				<p>© 2016 - 2020 YUZEN Translation LLC</p>
			</div>
		</div>
		</div>
	)
}

export default Footer
