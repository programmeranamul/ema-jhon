import React from 'react';
// import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price, seller } = props.product
    // console.log(props);
    return (
        <div  className="single-item">
            <div className="product-img">
                <img src={img} alt={name}/>
            </div>
            <div className="product-ditels">
                <h4>{name}</h4>
                <p className="seller"><small>by - {seller}</small></p>
                <p className="price"><FontAwesomeIcon icon={faCoffee} />${price}</p>
                <button className="addCardBtn" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add To Card</button>
            </div>
        </div>
    );
};

export default Product;