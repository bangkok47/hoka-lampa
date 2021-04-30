import React from 'react';
import style from './App.module.css';
import { Route } from 'react-router';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
