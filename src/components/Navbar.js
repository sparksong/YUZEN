import React from 'react';
import '../App.css'

class Navbar extends React.PureComponent {
    render() {
        return (
            <div class="navbar_container">
                <div class="navbar_logo">
                    <p>YUZEN Translation LLC</p>
                </div>
                <div class="navbar_links">
                    <a href="http://yuzentranslation.com">Translation</a>
                    <a href="http://yuzentranslation.com">Proofreading</a>
                    <a href="http://yuzentranslation.com">Presentation Coaching</a>
                    <a href="http://yuzentranslation.com">Blog</a>
                </div>
            </div>
        )
    }
}

export default Navbar;