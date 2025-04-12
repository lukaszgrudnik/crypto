import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';

// Define an action to increment or decrement the counter
export const increment = createAction<number>('counter/increment');
export const decrement = createAction<number>('counter/decrement');

// Define the initial state
const initialState: number = 0;

// Define the counterReducer
const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      increment,
      (state, action: PayloadAction<number>) => state + action.payload
    )
    .addCase(
      decrement,
      (state, action: PayloadAction<number>) => state - action.payload
    );
});

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counterReducer under 'counter'
  },
});

export default store;
