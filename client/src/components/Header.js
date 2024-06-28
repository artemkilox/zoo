import React from 'react';
import Logo from "./Logo";
import '../styles/header.css'

const Header = () => {
    return (
        <div className="header">
            <Logo
                height={92}
                width={92}
            />
        </div>
    );
};

export default Header;