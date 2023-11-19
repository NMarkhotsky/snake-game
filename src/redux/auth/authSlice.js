import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  login,
  logout,
  registration,
  updateUserScore,
} from './operations';

const initialState = {
  user: { name: null, score: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const handlePending = (state) => {
  state.isRefreshing = true;
  state.isLoggedIn = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, () => initialState)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateUserScore.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        isAnyOf(login.fulfilled, registration.fulfilled),
        (state, action) => {
          handleFulfilled(state, action);
        }
      )
      .addMatcher(
        isAnyOf(
          login.pending,
          registration.pending,
          logout.pending,
          fetchCurrentUser.pending,
          updateUserScore.pending
        ),
        (state) => {
          handlePending(state);
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          registration.rejected,
          logout.rejected,
          fetchCurrentUser.rejected,
          updateUserScore.rejected
        ),
        (state, action) => {
          handleRejected(state, action);
        }
      );
  },
});

export const authReducer = authSlice.reducer;
