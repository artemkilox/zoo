import React from 'react';
import logo from '../img/icons/Logo.svg'

const Logo = ({height, width}) => {
    return (
        <img height={height} width={width} src={logo} alt=""/>
    );
};

export default Logo;