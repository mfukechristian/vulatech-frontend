import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCompanies, fetchCompanyById } from "../actions/companyAction";

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    selectedCompany: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all companies
      .addCase(fetchAllCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(fetchAllCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch a company by ID
      .addCase(fetchCompanyById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCompany = action.payload;
      })
      .addCase(fetchCompanyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default companySlice.reducer;
