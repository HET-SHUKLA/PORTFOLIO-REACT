import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <ul>
                <li> <Link to="home">Home</Link> </li>
                <li> <Link to="about">About Us</Link> </li>
            </ul>
        </>
    );
}

export default Menu;
