import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/constants/provinces";

const covidSlice = createSlice({
  name: "Covid Slice",
  initialState: {
    covid: data.provinces,
  },
  reducers: {
    addCovid: (state, action) => {
      const { kota, status, jumlah } = action.payload;
      const index = state.covid.findIndex((item) => item.kota === kota);

      if (index !== -1) {
        const updatedCovid = { ...state.covid[index] };

        if (status === "Positif") {
          updatedCovid.kasus += jumlah;
        } else if (status === "Sembuh") {
          updatedCovid.sembuh += jumlah;
        } else if (status === "Meninggal") {
          updatedCovid.meninggal += jumlah;
        } else if (status === "Dirawat") {
          updatedCovid.dirawat += jumlah;
        }

        state.covid[index] = updatedCovid;
      }
    },
  },
});

const { addCovid } = covidSlice.actions;
const covidReducer = covidSlice.reducer;

export { addCovid };
export default covidReducer;
