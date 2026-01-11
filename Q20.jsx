export const createStore = reducer => {
  let state;
  const dispatch = action => {
    console.log(action);
    state = reducer(state, action);
  };
  return { dispatch, getState: () => state };
};
