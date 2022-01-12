import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
            <div className = 'header_searchInput' type = 'text'>
                <input className = 'header_search'/>
                {/* logo */}
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
               
                
            </div>
        </div>
    )
}

export default Header
