import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalQty: 0
  },
  reducers: {
    increase: (state, action) => {
      state.totalQty += 1;
    },
    decrease: (state, action) => {
      if (state.totalQty > 0) {
        state.totalQty -= 1;
      } else {
        state.totalQty = 0;
      }
    }
  }
});

// export reducer
export default cartSlice.reducer;

// export action
export const { increase, decrease } = cartSlice.actions;
