import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // bp If the item already exists in the cart, increment its quantity
      // Otherwise add the item to the cart with a quantity of 1
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.id === name);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // New item - add quantity of 1
      }
    },
    removeItem: (state, action) => {
      // bp Remove item from the cart based on its name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // bp Find the item by name and update its quantity
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
