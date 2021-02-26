import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="logo">
            <img  src={logo} alt="Logo Images"/>
            <nav>
                <a href="">Shop</a>
                <a href="">Order Review</a>
                <a href=""> Menage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;