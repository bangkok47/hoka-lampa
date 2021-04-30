const initialState = {
  items: [],
  isLoaded: false,
};

const sneakers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SNEAKERS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default sneakers;
