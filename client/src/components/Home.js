import React from 'react';
import './Home.css';
import Product from './Product';
// import HeaderCarousel from './HeaderCarousel';



function Home() {

    return (
        <div className='home'>
            <div className='home__container'>
                {/* <HeaderCarousel /> */}
                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt='amazon-banner'
                />
                {/* row of 2 products */}
                <div className='home__row'>
                    <Product 
                        id='1'
                        title='The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback'
                        price={19.99}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRix6QFJ0x-6evzewBuZ2kJK7_lAoQaLvVPfZpmaSK2mw8WVvHEkM5UPGOXdXwZ2pitIBRTI0M1&usqp=CAc'
                        rating={3}
                    />
                    <Product 
                        id='2'
                        title='Naruto: Uzumaki Naruto [Book]'
                        price={9.99}
                        image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHYwnDn2hSk2AD1k3EODDNbZoq2yQGM7TQWIFUUnvuB3Jo_0ONXK1uUuWQiHAPhfK28EKXevASaRfvR30ivFPwlzyZ7c4StujHSrLggj37Orhdw6vlLqql&usqp=CAE'
                        rating={5}
                    />
                </div>
                {/* row of 3 products */}
                <div className='home__row'>
                    <Product 
                        id='3'
                        title='Naruto Uchiha Obito Halloween Cosplay Cape'
                        price={79.99}
                        image='https://www-s.mlo.me/upen/v/tb2018/tb201808/tb20180828/8b099798-8cc2-4938-9950-0c3229c09633.jpg'
                        rating={4}
                    />
                    <Product 
                        id='4'
                        title="Men's Under Armour Navy Notre Dame Fighting Irish Replica Custom Jersey"
                        price={124.95}
                        image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNCwHCthnCmcWKlcXjS_ia0sdvbqlGe1SF8T95lzFCrgw3uCM9DkvzrTcXHm8NTkPmD8-ZpF_oUv90mAeCu26wC_6q348zxrz0n8yDpoMTOhf3L-xT4E5Z&usqp=CAE'
                        rating={5}
                    />
                    <Product 
                        id='5'
                        title="University of Notre Dame Men's B355L ND Ring"
                        price={459.99}
                        image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsQo7tZtgc7RUDX3saggUPpcmXwEzry9KXvBrFCidOxz8qW9ustOnRLD1sC7FU1zb3XiiGsQbLBWsZeWtAOxEiv_SUY-1-vwFE-CtPQ3oconnequ5WWDCdtQ&usqp=CAE'
                        rating={5}
                    />
                </div>
                {/* row of 1 */}
                <div className='home__row'>
                    <Product 
                        id='6'
                        title='Call of Duty: Black Ops Cold War - XBOX'
                        price={59.99}
                        image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0SJreNZ3nh2LoUzffyZ4pAKdpfClfOIZhyRTCJ3xGaIClcpSIIldkPONw9bqb6I-HL5RNHIK3TFqV4mS6F_3YzIGBc4oSmZma4IpSwHE&usqp=CAE'
                        rating={2}
                    />
                </div>
                <div className='home__row'>
                    <Product 
                        id='7'
                        title='Chicago 5 by Richard Wallich, 24x32-Inch Canvas Wall Art'
                        price={60.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/91rmeZYSTmL._AC_SX679_.jpg'
                        rating={5}
                    />
                    <Product 
                        id='8'
                        title='MoKo Case Fit Microsoft Surface Pro 7 Pro LTE, All-in-One Protective Cover Case with Pen Holder - Red'
                        price={30.99}
                        image='https://m.media-amazon.com/images/I/51vMPUjDLSL._AC_AA360_.jpg'
                        rating={3}
                    />
                    <Product 
                        id='9'
                        title="Lee Men's Performance Series Extreme Motion Slim Straight Leg Jean"
                        price={59.99}
                        image='https://m.media-amazon.com/images/I/81aqTYRixgL._AC_AA360_.jpg'
                        rating={4}
                    />
                    <Product 
                        id='10'
                        title='Xbox One S 1TB Console (Renewed), White'
                        price={59.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/612wQCy8x%2BL._SL1000_.jpg'
                        rating={4}
                    />
                    <Product 
                        id='11'
                        title='FOCO NCAA BRXLZ 3D Blocks Set - Mascots'
                        price={59.99}
                        image='https://m.media-amazon.com/images/I/71JDpaqUjdL._AC_SL1500_.jpg'
                        rating={1}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home;
