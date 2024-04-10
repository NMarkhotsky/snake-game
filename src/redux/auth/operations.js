import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchUserByToken,
  loginUser,
  logoutUser,
  registerUser,
  updateScore,
} from '../../services/authApi';
import {
  errorMessage,
  successMessage,
  messageLogin,
  messageRegister,
} from '../../utils/notifications';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await loginUser(credentials);
      successMessage(messageLogin.success);

      return user;
    } catch (error) {
      errorMessage(messageLogin.error);

      return rejectWithValue(error);
    }
  }
);

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await registerUser(credentials);
      successMessage(messageRegister.success);

      return user;
    } catch (error) {
      errorMessage(messageRegister.error);

      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logoutUser();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      return fetchUserByToken(persistedToken);
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const updateUserScore = createAsyncThunk(
  'auth/updateUserScore',
  async (score, { rejectWithValue }) => {
    try {
      return await updateScore(score);
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
