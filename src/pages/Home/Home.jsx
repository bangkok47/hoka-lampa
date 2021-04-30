import React from 'react';
import style from './Home.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { SneakersBlock, LoadingBlock } from '../../components';

import { fetchSneakers } from '../../redux/actions/sneakers';

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ sneakers }) => sneakers.items);
  const isLoaded = useSelector(({ sneakers }) => sneakers.isLoaded);

  React.useEffect(() => {
    dispatch(fetchSneakers());
  }, []);

  const handleAddItemToCard = (obj) => {
    dispatch({
      type: 'ADD_SNEAKERS_TO_CART',
      payload: obj,
    });
  };

  return (
    <div className={style.sneakers_block}>
      {isLoaded
        ? items.map((obj) => (
            <SneakersBlock onClickAddItem={handleAddItemToCard} key={obj.id} {...obj} />
          ))
        : Array(12)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index} />)}
    </div>
  );
}

export default Home;
