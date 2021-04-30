import React from 'react';
import style from './Button.module.css';

function Button({ onClick }) {
  return (
    <div className={style.button_container}>
      <button onClick={onClick} className={style.button}>
        Add to Cart
      </button>
    </div>
  );
}

export default Button;
