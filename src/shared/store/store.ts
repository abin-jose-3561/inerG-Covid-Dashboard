import { configureStore } from "@reduxjs/toolkit";
import { covidSlice } from "./covid-patient-store/covide-patient-store";

export const store = configureStore({
  reducer: {
    covid: covidSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
