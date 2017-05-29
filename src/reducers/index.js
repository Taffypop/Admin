const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
const ADD_ITEM_STATUS = 'ADD_ITEM_STATUS';
const READ_ITEM_STATUS = 'READ_ITEM_STATUS';

export const navigation = (state, action) => {

  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return true;
    default:
      return false;
  }
};

export const addItem = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_STATUS:
      return true;
    default:
      return state || false;
  }
};

export const readItem = (state, action) => {
  switch (action.type) {
    case READ_ITEM_STATUS:
      return action.data;
    default:
      return state || '';
  }
};
