import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOGIN
export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (values) => {
    // convert object to json
    const body = JSON.stringify(values);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body
      }
    ).then((response) => response.json());
    return response;
  }
);

// GET USER INFO
export const fetchUser = createAsyncThunk("auth/fetchUser", async (token) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => response.json());
  // console.log("products", products);
  return response;
});

const initialState = {
  status: "idle", // Loading, Success, Failed
  token: "",
  user: {}
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   login
      .addCase(fetchLogin.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log("login action", action);
        state.status = "Success";
        state.token = action.payload.accessToken;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "Failed";
      })
      //   GET USER
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("login action", action);
        state.status = "Success";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "Failed";
      });
  }
});

// export reducer
export default authSlice.reducer;

export const selectToken = (state) => state.authR.token;
export const selectUser = (state) => state.authR.user;
