import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, COMPANY_URL } from "../constants";

// Fetch all companies
export const fetchAllCompanies = createAsyncThunk(
  "companies/fetchAll",
  async () => {
    const response = await axios.get(`${BASE_URL}${COMPANY_URL}`);
    return response.data;
  }
);

// Fetch a company by ID
export const fetchCompanyById = createAsyncThunk(
  "companies/fetchById",
  async (id) => {
    const response = await axios.get(`${BASE_URL}${COMPANY_URL}/${id}`);
    return response.data;
  }
);
