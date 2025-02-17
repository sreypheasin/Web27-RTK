import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countValue: 0
  },
  reducers: {
    increase: (state, action) => {
      state.countValue += 1;
    }
  }
});

// export reducer
export default counterSlice.reducer;
// export default reducer;

export const { increase } = counterSlice.actions;
