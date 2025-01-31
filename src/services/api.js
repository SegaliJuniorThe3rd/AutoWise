import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api"; // Change this to your backend URL

export const login = async (credentials) => {
    return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

export const register = async (userData) => {
    return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const fetchVehicleData = async () => {
    return axios.get(`${API_BASE_URL}/vehicle/status`);
};

export const fetchFaultAlerts = async () => {
    return axios.get(`${API_BASE_URL}/vehicle/faults`);
};

export const fetchRecommendations = async () => {
    return axios.get(`${API_BASE_URL}/vehicle/recommendations`);
};
