const initialState = {
  count: 0,
  isLoading: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "INC_COUNT":
      return {
        ...state,
        count: state.count + 1,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default counterReducer;
