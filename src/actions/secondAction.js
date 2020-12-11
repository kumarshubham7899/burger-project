export const secondClickHandler = (payload) => {
  return {
    type: 'SECOND_CLICK',
    payload,
  };
};

export const secondClickDecrease = (payload) => {
  return {
    type: 'DECREASE',
    payload,
  };
};
