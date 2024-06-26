// src/features/user/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api/user';

interface UserState {
  username: string;
  password: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: '',
  password: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const login:any = createAsyncThunk(
  'user/login',
  async (payload: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginUser(payload);
      return response;
    } catch (err:any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logout:any = createAsyncThunk('user/logout', async (_, { dispatch }) => {
  // Perform any necessary cleanup here (e.g., clearing local storage)
  // Dispatch the necessary action to update the state
  dispatch(userSlice.actions.logout());
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.password = ''; // Clear the password for security
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
export const { logout: logoutAction } = userSlice.actions;
