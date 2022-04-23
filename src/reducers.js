const initState = {count: 0};
const reducers = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return {count: state.count + 1};
    default:
      return initState;
  }
};

export {
  reducers
};

