import React, {Component} from 'react';
import '../../css/components/ProductPane/ProductPane.css';

class ProductPane extends Component {
    render() {
        return (
            <div className="productPaneContainer">
                {this.props.new ? <span className="newProduct">New</span> : ""}
                <img src={this.props.img} alt="Tea leaves" />
                <span className="productName">{this.props.name}</span>
                <div className="productPrice">
                    <span>${this.props.price}</span>
                </div>
                <div className="productReviews">
                    <ul className="productStars">
                    </ul>
                    <span className="count">{this.props.reviews}</span>
                    <span>reviews</span>
                </div>
            </div>
        );
    }

}

ProductPane.propTypes = {};

ProductPane.defaultProps = {
    img: "/img/teaPaneImg.jpg",
    name: "Unknown",
    price: 0.00,
    reviews: 0
};

export default ProductPane;