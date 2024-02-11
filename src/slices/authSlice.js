import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    jwtToken: '',
    user: {},
  },
  reducers: {
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
})

export const { setJwtToken, setUser } = authSlice.actions;

export default authSlice.reducer;