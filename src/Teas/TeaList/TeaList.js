import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TeaConsumer} from '../TeaProvider';
import Frame from '../../components/Frame/Frame';
import ProductPane from '../../components/ProductPane/ProductPane'
import {Link} from 'react-router-dom';
import './TeaList.css';

class TeaList extends Component {

    constructor(props) {
        super(props);


        this.teasType = props.teaType;
        this.teaType = this.teasType.slice(0, this.teasType.length - 1);
        this.state = {
            teaType: this.teaType
        };


        this.buildChildren.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.teaType !== this.teasType) {
            this.teasType = nextProps.teaType;
            this.teaType = nextProps.teaType.slice(0, nextProps.teaType.length - 1);
        }
    }

    buildChildren(state) {
        return (
            state[this.teaType + 'Teas'].map((tea, k) => (
                <li key={k}>
                    <Link to={{
                        pathname:`/teas/${this.teasType}/${tea.id}`
                    }}>
                        <ProductPane key={k} img={tea.image} name={tea.name} price={tea.price} reviews={tea.reviews} />
                    </Link>
                </li>
            ))
        )
    }

    render() {
        return (
            <Frame>
                <h1> {this.teasType} </h1>
                <ul className="productList">
                    <TeaConsumer>
                        { (state) => {
                            return this.buildChildren(state);
                        }}
                    </TeaConsumer>
                </ul>
            </Frame>
        );
    }

}

TeaList.propTypes = {};

TeaList.defaultProps = {};

export default TeaList;