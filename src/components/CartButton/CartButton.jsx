import React from 'react';
import { useSelector } from 'react-redux';

import style from './CartButton.module.css';
import { FaOpencart } from 'react-icons/fa';

const CartButton = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

  return (
    <div>
      <button className={style.button}>
        {totalPrice ? <span>{totalPrice} $</span> : <div></div>}
        <FaOpencart />
        {totalCount ? <span>{totalCount}</span> : <div></div>}
      </button>
    </div>
  );
};

export default CartButton;
