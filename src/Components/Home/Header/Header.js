import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbarr from '../Navbarr/Navbarr';
import './Header.css';

const Header = () => {
    return (
        <div className="header-style">
            <Navbarr></Navbarr>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;