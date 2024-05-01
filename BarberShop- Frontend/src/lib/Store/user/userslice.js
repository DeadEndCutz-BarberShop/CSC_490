import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, fetchBarbers, fetchServices } from "./userActions";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  barbers: [],
  services: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(fetchBarbers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBarbers.fulfilled, (state, action) => {
        state.barbers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBarbers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
