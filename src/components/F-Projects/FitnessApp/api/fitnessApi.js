import axios from 'axios';
import 'dotenv/config';

const BASE_URL = process.env.SERVER_BASE || 'https://code-camp-291818.ew.r.appspot.com';

export const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users/`);
    return response.data;
};

export const addExercise = async (exerciseData) => {
    const response = await axios.post(`${BASE_URL}/exercises/add/`, exerciseData);
    return response.data;
};

export const getExercises = async () => {
    const response = await axios.get(`${BASE_URL}/exercises/`);
    return response.data;
};

export const getExerciseById = async (id) => {
    const response = await axios.get(`${BASE_URL}/exercises/${id}`);
    return response.data;
};

export const updateExercise = async (id, exerciseData) => {
    const response = await axios.post(`${BASE_URL}/exercises/update/${id}`, exerciseData);
    return response.data;
};

export const deleteExercise = async (id) => {
    const response = await axios.delete(`${BASE_URL}/exercises/${id}`);
    return response.data;
};

export const addUser = async (userData) => {
    const response = await axios.post(`${BASE_URL}/users/add/`, userData);
    return response.data;
};
