import React from 'react';
// import airbnbLogo from '../images/airbnb.png'

export default function NavBar() {
    return (
        <div className='navbar'>
            <img className='nav-logo' src={process.env.PUBLIC_URL + '/images/airbnb.png'} ></img>
        </div>
    )
}