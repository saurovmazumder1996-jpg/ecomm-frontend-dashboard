import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_sellers_requests = createAsyncThunk(
  "seller/get_sellers",
  async (
    { perPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/get-sellers-requests?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`,
        {
          withCredentials: true,
        }
      );

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//End Method

//Get Seller Details
export const get_seller_details = createAsyncThunk(
  "seller/get_seller_details",
  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/get-seller-details/${sellerId}`, {
        withCredentials: true,
      });
      console.log("data", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//End Method

//Get Seller Details
export const submit_seller_status = createAsyncThunk(
  "seller/submit_seller_status",
  async ({ sellerId, sellerStatus }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(
        `/submit-seller-status`,
        { sellerId, sellerStatus },
        {
          withCredentials: true,
        }
      );
      console.log("data", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//End Method

export const sellerReducer = createSlice({
  name: "seller",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    sellers: [],
    totalSeller: 0,
    sellerDetails: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_sellers_requests.fulfilled, (state, { payload }) => {
        state.totalSeller = payload.totalSeller;
        state.sellers = payload.sellers;
      })
      .addCase(get_seller_details.fulfilled, (state, { payload }) => {
        state.sellerDetails = payload.sellerDetails;
      })
      .addCase(submit_seller_status.pending, (state, { payload }) => {
        state.successMessage = "";
        state.loader = true;
      })
      .addCase(submit_seller_status.rejected, (state, { payload }) => {
        state.errorMessage = payload.message;
        state.loader = false;
      })
      .addCase(submit_seller_status.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.loader = false;
        state.sellerDetails = payload.sellerDetails;
      });
  },
});
export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;
