import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toppings: ['pepperoni'],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
    removeTopping: (state, action) => {
      const x: string[] = state.toppings.splice(action.payload, action.payload);
      state.toppings = [...state.toppings];
      console.log(x);
    },
  },
});

export const { toggleGluten, addTopping, removeTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
