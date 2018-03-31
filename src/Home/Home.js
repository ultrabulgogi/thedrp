import React, {Component} from 'react';
import Frame from '../components/Frame/Frame'
import ProductPane from '../components/ProductPane/ProductPane';
import Carousel from 'nuka-carousel';

import '../components/ProductPane/ProductPane.css';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <Frame>
                <Carousel
                    renderCenterLeftControls={({previousSlide}) => (
                        <button onClick={previousSlide}>&lt;</button>
                    )}
                    renderCenterRightControls={({nextSlide}) => (
                        <button onClick={nextSlide}>&gt;</button>
                    )}
                >
                    <div className="carouselSlides" id="heroSlide1">
                        <img src="/img/heroes/hero1.jpg" alt="green tea" />
                        <p>!!!Calm and Relaxing</p>
                    </div>
                    <div className="carouselSlides" id="heroSlide2">
                        <img src="/img/heroes/hero2.jpg" alt="green tea" />
                        <p>A cup of tea a day...</p>
                    </div>
                    <div className="carouselSlides" id="heroSlide3">
                        <img src="/img/heroes/hero3.jpg" alt="green tea" />
                        <p>Mint and Chill</p>
                    </div>
                    <div className="carouselSlides" id="heroSlide4">
                        <img src="/img/heroes/hero4.jpg" alt="green tea" />
                        <p>I choose you!</p>
                    </div>
                    <div className="carouselSlides" id="heroSlide5">
                        <img src="/img/heroes/hero5.jpg" alt="green tea" />
                        <p>#something</p>
                    </div>
                </Carousel>

                <div className="productListContainer">
                    <div className="productListIntro">
                        <h2>Green Tea</h2>
                        <p>Green Tea comes from Camellia sinensis leaves that are immediately steamed or pan-fired rather than being exposed to air so that no oxidation occurs.   This special handling makes for a more delicate brew that is typically lower in caffeine than black and Oolong teas.  Although amounts vary, green teas are highest in polyphenols known as EGCG, which is why so many make it part of their healthy lifestyle.</p>
                    </div>
                    <ul className="productListPanes">
                        <li>
                            <ProductPane img="/img/teaPaneImg.jpg" name="Green Tea 1" price="1.99" stars="1" reviews="10" new={true} />
                        </li>
                        <li>
                            <ProductPane img="/img/teaPaneImg.jpg" name="Green Tea 2" price="2.99" stars="2" reviews="20" new={false} />
                        </li>
                        <li>
                            <ProductPane img="/img/teaPaneImg.jpg" name="Green Tea 3" price="3.99" stars="3" reviews="30" new={false} />
                        </li>
                    </ul>
                </div>

                <div className="productListContainer">
                    <div className="productListIntro">
                        <h2>Black Tea</h2>
                        <p>Black Tea, or just plain ‘tea’ as it is often called, comes from Camellia sinensis leaves that are first crushed, then exposed to air for several hours.  The amount of oxidation produces a brew that is robust in flavor and rich in color that can be enjoyed as you start your day, or as a pick-me-up any time of day.</p>
                    </div>
                    <ul className="productListPanes">
                        <li>
                            <ProductPane img="/img/teaPaneImg.jpg" name="Black Tea 1" price="10.99" stars="1.5" new={true} />
                        </li>
                        <li>
                            <ProductPane img="/img/teaPaneImg.jpg" name="Black Tea 2" price="11.99" stars="2.5" reviews="22" new={true} />
                        </li>
                        <li>
                            <ProductPane img="/img/teaPaneImg.jpg" name="Black Tea 3" price="12.99" stars="3.5" reviews="33" new ={false} />
                        </li>
                    </ul>
                </div>
            </Frame>
        );
    }

}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;