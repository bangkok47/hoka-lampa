import React from 'react';
import style from './Cart.module.css';
import { BiCart, BiArrowBack, BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import emptyCartImg from '../../assets/img/emptyCart.png';
import { CartItem } from '../../components';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

function Cart() {
  const iconsStyle = { width: '35px', height: '35px' };

  const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const addedSneakers = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Do you want to remove this items?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  return (
    <div className={style.cart__wrapper}>
      {totalCount ? (
        <div className={style.cart__container}>
          <div className={style.cart__top}>
            <div className={style.cart__title}>
              <BiCart style={iconsStyle} />
              Shopping Cart
            </div>
            <div onClick={onClearCart} className={style.clear__cart}>
              <BiTrash style={iconsStyle} />
              Clear Cart
            </div>
          </div>
          <div className={style.cart__items}>
            {addedSneakers.map((obj) => (
              <CartItem
                name={obj.name}
                id={obj.id}
                img={obj.imgUrl}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onPlus={onPlusItem}
                onMinus={onMinusItem}
              />
            ))}
          </div>
          <div className={style.cart__bottom}>
            <div className={style.cart__bottom__details}>
              <span>
                Qty: <b>{totalCount}</b>
              </span>
              <span>
                Order Total: <b>{totalPrice} $</b>
              </span>
            </div>
            <div className={style.cart__bottom__btns}>
              <Link style={{ textDecoration: 'none' }} to="/">
                <span>
                  <BiArrowBack />
                  Continue Shopping
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.cart__empty}>
          <img src={emptyCartImg} alt="Empty cart" />
          <Link to="/">
            <span>GO BACK</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
