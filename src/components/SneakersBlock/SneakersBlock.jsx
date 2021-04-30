import React from 'react';
import style from './SneakersBlock.module.css';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

function SneakersBlock({ id, name, imgUrl, sizes, price, onClickAddItem }) {
  const onAddItem = () => {
    const obj = {
      id,
      name,
      imgUrl,
      price,
    };
    onClickAddItem(obj);
  };

  return (
    <div className={style.sneakers_block}>
      <img className={style.sneakers_img} src={imgUrl} alt="Sneakers" />
      <h4 className={style.sneakers_title}>{name}</h4>
      <div className={style.sneakers_size}>Sizes: {sizes.join(',  ')}</div>
      <div className={style.sneakers_bottom}>
        <div className={style.sneakers_price}>{price} $</div>
        <Button onClick={onAddItem} />
      </div>
    </div>
  );
}

SneakersBlock.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.number,
  onClickAddItem: PropTypes.func,
};

SneakersBlock.defaultProps = {
  name: '---',
  sizes: [],
  price: 0,
};

export default SneakersBlock;
