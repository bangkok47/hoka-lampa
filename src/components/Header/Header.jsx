import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css';
import logoPng from '../../assets/img/hoka.png';
import { CartButton } from '../';

function Header() {
  return (
    <div>
      <div className={style.header}>
        <div className={style.container}>
          <Link to="/">
            <div>
              <img src={logoPng} alt="HOKAONEONE" />
            </div>
          </Link>
          <div className={style.button__container}>
            <Link style={{ textDecoration: 'none' }} to="/cart">
              <CartButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
