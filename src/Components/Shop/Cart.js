import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = Number.parseFloat((cart.reduce((total, pro) => total + pro.price,0)).toFixed(2))
    let shipping = 0;
    if(total > 0){
        shipping = 12
    }
    else if(total > 15) {
        total = 4.99
    }
    const tax = Number.parseFloat((total * .10).toFixed(2) ); 
    const grandTotal = Number.parseFloat((tax + shipping + total).toFixed(2));
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Product Price : {total}</small></p>
            <p><small>Shipping Cost :{shipping}</small></p>
            <p><small>Tax + VAT :{tax}</small></p>
            <p>Total Cost : {grandTotal}</p>
        </div>
    );
};

export default Cart;