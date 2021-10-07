import React from 'react';
import './Footer.css';
import ScrollTop from './ScrollTop';
import CreatorFooter from './CreatorFooter';

function Footer() {
    return (
        <div>
            <ScrollTop />
            <div className='footer'>
                <div className='footer__sectionSpace'></div>
                <div className='footer__section'>
                    <div className='footer__sectionTitle'>
                        <p>Get to Know Us</p>
                    </div>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Sustainblility</p>
                    <p>Press Center</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Tours</p>
                </div>
                <div className='footer__sectionSpace'></div>
                <div className='footer__section'>
                    <div className='footer__sectionTitle'>
                        <p>Make Money With Us</p>
                    </div>
                    <p>Sell Products on Amazon</p>
                    <p>Sell Apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>See More Make Money with Us</p>
                </div>
                <div className='footer__sectionSpace'></div>
                <div className='footer__section'>
                    <div className='footer__sectionTitle'>
                        <p>Amazon Payment Products</p>
                    </div>
                    <p>Amazon Rewards Visa Signature Cards</p>
                    <p>Amazon.com Store Card</p>
                    <p>Amazon Business Card</p>
                    <p>Amazon Business Line of Credit</p>
                    <p>Shop with Points</p>
                    <p>Credit Card Market Place</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                </div>
                <div className='footer__sectionSpace'></div>
                <div className='footer__section'>
                    <div className='footer__sectionTitle'>
                        <p>Let Us Help You</p>
                    </div>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping Rates and Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage Your Content and Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
                <div className='footer__sectionSpace'></div>
            </div>
            <CreatorFooter />
        </div>
    )
}

export default Footer
