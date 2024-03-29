import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hoocks/useCart';
import useProducts from '../../hoocks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemove = key =>{
        const remaining = cart.filter(product => product.key !== key);
        setCart(remaining);
        deleteFromDb(key);
    }

    const handlePlaceOrder = () =>{
        setCart([]);
        clearTheCart();
        navigate('/shipping');
    }
    return (
        <div className = "shop-container">
            <div className="product-container">

            {
                cart.map(product => <ReviewItem
                key={product.key}
                product={product}
                handleRemove = {handleRemove}
                >

                </ReviewItem>)
            }

            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className="btn-regular">Proceed To Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;