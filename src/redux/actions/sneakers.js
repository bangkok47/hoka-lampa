import axios from 'axios';

export const fetchSneakers = () => (dispatch) => {
  axios.get('/sneakers').then(({ data }) => {
    dispatch(setSneakers(data));
  });
};

export const setSneakers = (items) => ({
  type: 'SET_SNEAKERS',
  payload: items,
});
