import axios from 'axios';
import SERVER_URL from './index'

export const workTrackerAPI = axios.create({
    baseURL: SERVER_URL + '/workTracker',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});