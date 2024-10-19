import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICovidApiResponse } from "../../models/covid-patient-models";
import { axiosInstance } from "../../utils/interceptor/intreceptor";
import { API } from "../../utils/interceptor/api-enum";

interface CovidState {
  loading: boolean;
  error: string | null;
  covidPatientStats: ICovidApiResponse | null;
}

const initialState: CovidState = {
  loading: false,
  error: null,
  covidPatientStats: null,
};

export const fetchCovidPatientStats = createAsyncThunk(
  "covid/covidpatient",
  async () => {
    try {
      const response = await axiosInstance.get(API.covidstats);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidPatientStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCovidPatientStats.fulfilled, (state, action) => {
        state.loading = false;
        state.covidPatientStats = action.payload;
      })
      .addCase(fetchCovidPatientStats.rejected, (state) => {
        state.loading = false;
        state.error = "Error while fetching the covid patient stats";
      });
  },
});

export default covidSlice.reducer;
