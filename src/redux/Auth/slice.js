import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const authSlise = createSlice({
  name: 'auth',
  initialState: {
     user: { name: null, email: null, password: null, city: null, phone: null },
  _id: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user._id = action.payload.userId;
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user._id = action.payload._id;
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user._id = null;
        state.user.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user._id = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlise.reducer;