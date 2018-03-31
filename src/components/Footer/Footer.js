import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="mainFooter">
                <nav>
                    <h3>More to Explore</h3>
                    <ul>
                        <li>
                            <a href="/customer_service">Customer Service</a>
                        </li>
                        <li>
                            <a href="/about_us">About Us</a>
                        </li>
                        <li>
                            <a href="/press">Press</a>
                        </li>
                        <li>
                            <a href="/affiliates">Affiliates</a>
                        </li>
                        <li>
                            <a href="/hiring">We're Hiring</a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <h3>Thirst Project Update</h3>
                    <p>A year's supply of Clean Water has been donated to over 7k people & counting thanks to you! <a href="https://my.charitywater.org/projects">#charitywater</a> </p>
                </div>

                <div>
                    <h3>Newsletter</h3>
                    <p>Enter your e-mail to be the first to hear about free gifts, exclusive sales, special events, and recipes.</p>
                    <form>
                        <input type="text" name="newsletterInput" placeholder="your-email@example.com" />
                        <button type="button">Subscribe</button>
                    </form>
                </div>


                <div id="footerCopyRight">
                    <div>
                        &copy; 2018 The Drop
                    </div>

                    <div className="socialMediaContainer">

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer