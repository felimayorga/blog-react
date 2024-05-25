import axios from "axios";

import { API_URL, API_KEY } from "../utils/constants";

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: { "app-id": API_KEY },
});
