const initialState = {
  count: 0,
};

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: action.payload };
    case 'DECREASE':
      return { count: action.payload };
    default:
      return state;
  }
};

export default firstReducer;
