import { configureStore } from '@reduxjs/toolkit';
import pizzaSlice from './pizzaSlice';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    counter: counterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
