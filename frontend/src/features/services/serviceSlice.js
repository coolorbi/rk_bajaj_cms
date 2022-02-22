import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import serviceService from './serviceService';

const initialState = {
  isSuccess: false,
  isLoading: true,
  message: '',
  services: [],
  service: {},
  isError: false,
};

export const createService = createAsyncThunk(
  'service/create',
  async (serviceData, thunkAPI) => {
    try {
      return await serviceService.createService(
        serviceData,
        thunkAPI.getState().auth.user.token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserServices = createAsyncThunk(
  'service/getUserServices',
  async (_, thunkAPI) => {
    try {
      return await serviceService.getUserServices(
        thunkAPI.getState().auth.user.token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.ticket = {};
      state.tickets = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        (createService.pending,
        (state) => {
          state.isLoading = true;
        })
      )
      .addCase(createService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = action.payload;
      })
      .addCase(createService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(getUserServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.type;
      });
  },
});

export const { reset } = serviceSlice.actions;

export default serviceSlice.reducer;
