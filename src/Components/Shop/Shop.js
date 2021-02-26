import React, {useState} from 'react';
import fakeData from './../../fakeData/index';
import Cart from './Cart';
import Product from './Product';
import './Shop.css'

const Shop = () => {
  
    const fristTen = fakeData.slice(0,10);
    const [products, setproducts] = useState(fristTen);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
      console.log(product);
      const newCart = [...cart, product];
      setCart(newCart)
    }
    
    return (
      
        <div className="shop-conatiner">

          <div className="product-container">
            {products.map((product) => <Product product={product} handleAddProduct={handleAddProduct} />)}
          </div>

          <div className="cart-conatiner">
              <Cart cart= {cart} />
          </div>
        </div>
    );
};

export default Shop;