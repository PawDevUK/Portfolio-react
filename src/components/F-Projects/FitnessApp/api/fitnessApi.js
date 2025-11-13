import axios from 'axios';
import SERVER_URL from '../../../../api/index'

const BASE_URL =
    window.location.hostname === 'localhost'
        ? 'http://localhost:8080/fitnessapp' // Local development server
        : `${SERVER_URL}/fitnessapp`; // Production server

export const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/endpoint`);
    return response.json();
};

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
