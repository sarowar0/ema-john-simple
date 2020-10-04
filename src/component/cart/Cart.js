import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // we get the cart state by array. thats way we take for loop for finding price for each array. And we add the all price in total variable
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        total = parseFloat(total.toFixed(2))
    }

    //Declare shopping price
    let shipping = 0;
    if (cart.length ===0) {
        shipping = 0
    }
    else if(cart.length <= 5){
        shipping = 10;
    }
    //Count total price before tax
    const beforeTax = parseFloat((total + shipping).toFixed(2));
    const tax = parseFloat((total / 50).toFixed(2));
    const grandTotal = (beforeTax + tax).toFixed(2);
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <h6>Order items: {cart.length}</h6>
            <div className="cart-cal">
                <p>Total Price: <span>${total}</span></p>
                <p>Shipping & Handing <span>${shipping}</span></p>
                <p>Total before tax <span>${beforeTax}</span></p>
                <p>Estimated tax: <span>${tax}</span></p>
                <p><strong>Grand total: </strong><span>${grandTotal}</span></p>
            </div>
            <button className='order-review'>Review your order</button>
        </div>
    );
};

export default Cart;