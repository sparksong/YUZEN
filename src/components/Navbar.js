import React from 'react';
import '../App.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Navbar extends React.PureComponent {
    render() {
        return (
            <div class="navbar_container">
                <div class="navbar_logo">
                    <AnchorLink offset='100' href="#welcome"><p>YUZEN Translation LLC</p></AnchorLink>
                </div>
                <div class="navbar_links">
                    <AnchorLink offset='100' href="#translation">Translation</AnchorLink>
                    <AnchorLink offset='100' href="#proofreading">Proofreading</AnchorLink>
                    <AnchorLink offset='100' href="#presentation">Presentation Coaching</AnchorLink>
                    <a href="http://yuzentranslation.com">Blog</a>
                </div>
            </div>
        )
    }
}

export default Navbar;