import React from 'react';
import '../styles/components/header.css';
import MenuItem from './MenuItem';

const Header: React.FC = () => {
    return (
        <header>
            <h1>adriana</h1>
            <nav>
                <MenuItem title="About" />
                <MenuItem title="What I Do" />
                <MenuItem title="My Projects" />
            </nav>
        </header>
    );
};

export default Header;