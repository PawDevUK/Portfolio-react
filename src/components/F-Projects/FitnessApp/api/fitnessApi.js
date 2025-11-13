import axios from 'axios';

const BASE_URL = 'https://portfolio-server-104qu2sac-pawdevs-projects-c1e9b938.vercel.app/'

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
