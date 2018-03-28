import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: props.children
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <section id="mainContent">
                    {this.props.children}
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default Frame;