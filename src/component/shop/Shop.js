import React, { useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';

const Shop = () => {
    const products = fakeData.slice(0,10);  //products == first10 (before editing)
    // const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]); //To create state for cart component
    //Add event handler for add cart button. Pass this event handler by addProductHandler attribute.
    const addProductHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product} addProductHandler={addProductHandler}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;