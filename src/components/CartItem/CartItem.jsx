import React from 'react';
import style from './CartItem.module.css';

import { BiPlus, BiMinus } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';

function CartItem({ id, name, img, totalPrice, totalCount, onRemove, onPlus, onMinus }) {
  const iconsStyle = { width: '25px', height: '25px', color: '#53f3f2' };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleOnMinus = () => {
    onMinus(id);
  };

  return (
    <div className={style.cart__item}>
      <div className={style.cart__item__img}>
        <img src={img} alt="sneakers" />
      </div>
      <div className={style.cart__info}>{name}</div>
      <div className={style.cart__item__btns}>
        <div onClick={handlePlusItem} className={style.cart__item__plus}>
          <BiPlus style={iconsStyle} />
        </div>
        <div className={style.cart__item__count}>{totalCount}</div>
        <div onClick={handleOnMinus} className={style.cart__item__minus}>
          <BiMinus style={iconsStyle} />
        </div>
      </div>
      <div className={style.cart__item__price}>{totalPrice} $</div>
      <div onClick={handleRemoveClick} className={style.cart__remove__items}>
        <TiDelete style={iconsStyle} />
      </div>
    </div>
  );
}

export default CartItem;
