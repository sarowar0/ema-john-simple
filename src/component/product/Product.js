import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,stock, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-content'>
                <h5>{name}</h5>
                <p>By: {seller}</p>
                <p><strong>${price}</strong></p>
                <p>Total {stock} in available -order soon</p>
                {/* we pass the value props.product in event handler function */}
                <button onClick={() => props.addProductHandler(props.product)} className='order-btn'><i class="fa fa-shopping-cart pr-2"></i>add to order</button>
            </div>
        </div>
    );
};

export default Product;