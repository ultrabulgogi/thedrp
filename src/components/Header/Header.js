import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header id="mainHeader">
                <a id="mainLogo" className="logo" href="/">
                    <div className="logoTop">
                        <span id="logoThe">The</span>
                        <img src='/img/icon.png' alt="The Drop" />
                        <span>Drp</span>
                    </div>
                    <div className="logoBottom">
                        Premium Teas
                    </div>
                </a>

                <nav>
                    <ul>
                        <li>
                            <Link to="/teas/whites">White</Link>
                        </li>
                        <li>
                            <Link to="/teas/greens">Green</Link>
                        </li>
                        <li>
                            <Link to="/teas/blacks">Black</Link>
                        </li>
                        <li>
                            <Link to="/teas/oolongs">Oolongs</Link>
                        </li>
                        <li>
                            <Link to="/teas/herbals">Herbals</Link>
                        </li>
                        <li>
                            <Link to="/teas/tools">Tools</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header