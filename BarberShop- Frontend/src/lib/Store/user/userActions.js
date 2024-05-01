import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearAllCookies,
  getCookie,
} from "../../../app/Components/Common/Cookies";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getCookie("access_token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

// Define the fetchUser action creator
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    clearAllCookies();
    throw error;
  }
});

export const fetchBarbers = createAsyncThunk("user/fetchBarbers", async () => {
  try {
    const response = await axiosInstance.get("/auth/get-barbers");
    return response.data;
  } catch (error) {
    console.error("Error fetching barbers:", error);
    throw error;
  }
});

export const fetchServices = createAsyncThunk(
  "user/fetchServices",
  async () => {
    try {
      const response = await axiosInstance.get("/services/get-services");
      return response.data;
    } catch (error) {
      console.error("Error fetching barbers:", error);
      throw error;
    }
  }
);
