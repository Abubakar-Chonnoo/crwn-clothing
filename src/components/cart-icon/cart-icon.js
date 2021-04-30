import React, {useState,useEffect} from 'react';
import './cart-icon.scss';
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({CartToggle, setCartToggle}) => {

    // const [cartHidden, setCartHidden] = useState(true); // to toggle cart dropdown
    console.log(CartToggle);

    return (
        <div className='cart-icon' onClick={() => setCartToggle(!CartToggle)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;