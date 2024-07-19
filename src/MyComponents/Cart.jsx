import React, { useContext, useState, useEffect, useCallback } from 'react';
import cart_delete from './Images/cart_delete.svg';
import Subscribe from './Subscribe';
import Footer from './Footer';
import CartCounter from './CartCounter';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotal = useCallback(() => {
        const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1 )), 0);
        setTotalPrice(total);
    }, [cartItems]);

    useEffect(() => {
        calculateTotal();
    }, [cartItems, calculateTotal]);

    // useGSAP(() => {
    //     gsap.from(".h11", {
    //         y: 25,
    //         x:1000,
    //         rotate: 90,
    //         duration: 5,
    //         opacity: 1,
    //     });
    // });

    const handleQuantityChange = () => {
        calculateTotal();
    };

    return (
        <>
            <div className="cart">
                <h1 className='your_cart'>Your Cart</h1>
                <div className="cart_wrapper">
                    <div className="cart_left">
                        <div>
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                <div>
                                    <div className="container">
                                        <div className="cart_row row">
                                            {cartItems.map((item, index) => (
                                                <div className="container" key={index}>
                                                    <div className="cart_row row">
                                                        <div className="col-2">
                                                            <img className='cart_image' src={item.imgsrc} alt={item.name} />
                                                        </div>
                                                        <div className="item_padding col-4">
                                                            <h5 className='fw-bold'>{item.name}</h5>
                                                            <h6 className='fw-bold'>${item.price.toFixed(2)}</h6>
                                                        </div>
                                                        <div className="flex_class col-3">
                                                            <CartCounter
                                                                price={item.price}
                                                                quantity={item.quantity}
                                                                onQuantityChange={handleQuantityChange}
                                                            />
                                                        </div>
                                                        <div className="delete_img col-2">
                                                            <img onClick={() => removeFromCart(item)} src={cart_delete} alt="Remove" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cart_right">
                        <div className="cart_container container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className='fw-bold'>Cart Total</h4>
                                </div>
                                <div className="col-8 subtotal">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-4">
                                    <h6 className='fw-bold'>${totalPrice.toFixed(2)}</h6>
                                </div>
                                <div className="col-12">
                                    <input className='cart-total-input py-2 px-4' type="text" placeholder='Your Voucher' />
                                    <button className='btn btn-dark apply btn' type="button">Apply</button>
                                </div>
                                <div className="col-12">
                                    __________________________________________________
                                </div>
                                <div className="col-8 subtotal total">
                                    <p>Total</p>
                                </div>
                                <div className="col-4 fw-bold">
                                    <h6 className='fw-bold total'>${totalPrice.toFixed(2)}</h6>
                                </div>
                                <Link to="/checkOut">
                                    <button className='btn btn-dark checkout-btn fw-bold' type="button">Checkout Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe />
            </div>
            <Footer />
        </>
    );
}
