export const firstClickHandler = (payload) => {
  return {
    type: 'FIRST_CLICK',
    payload,
  };
};

export const firstClickIncrease = (payload) => {
  return {
    type: 'INCREASE',
    payload,
  };
};
