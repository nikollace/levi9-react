import { ADD_ITEM_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../constants";
const initialState = {
  items: [],
  counter: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        counter: state.items.length + 1,
        items: [...state.items, action.item],
      };
    case REMOVE_FROM_CART:
      return removeFromArray(state, action);

    case EMPTY_CART:
      return {
        ...state,
        items: [],
        counter: 0,
      };

    default:
      return state;
  }
};
export default cartReducer;

const removeFromArray = (state, action) => {
  let newItems = [...state.items];
  newItems.splice(newItems.indexOf(action.id), 1);

  return {
    ...state,
    items: newItems,
    counter: newItems.length,
  };
};
