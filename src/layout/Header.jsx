import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='brown darken-3'>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">React Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#!">Repo</a></li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;