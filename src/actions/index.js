const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
const ADD_ITEM = 'ADD_ITEM';
const READ_ITEM = 'READ_ITEM';

export const toggleNavigation = () => ({ type: TOGGLE_NAVIGATION });
export const addItem = data => ({ type: ADD_ITEM, data: data });
export const readItem = data => ({ type: READ_ITEM, data: data });
