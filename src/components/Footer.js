import React from 'react';
import '../App.css';

class Footer extends React.PureComponent {
    render() {
        return (
            <div class="footer_container">
                <div class="social_contact_container">
                    <div class="social_media">
					    <h3>Connect with us</h3>
						<a href="https://www.facebook.com/yuzentranslation/"><i class="fa fa-facebook"></i></a>
						<a href="https://twitter.com/contact_yuzen"><i class="fa fa-twitter"></i></a>
						<a href="https://www.linkedin.com/in/yuzen-translation-llc-a69913144/"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div class="contact_us">
                        <h3>Contact Us</h3>
                        <p><i class="fa fa-envelope"></i> contact@yuzentranslation.com</p>
                        <a href="tel:+8105014071394"><i class="fa fa-phone"></i>(81) 050 1407 1394</a>
                    </div>
                </div>
                <div class="copyright">
					<p>© 2016 - 2020 YUZEN Translation LLC</p>
                </div>
			</div>
        )
    }
}

export default Footer;