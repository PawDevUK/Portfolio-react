import axios from 'axios';
import { serverURL } from './base_server_URI';

export const workTrackerAPI = axios.create({
    baseURL: serverURL + '/workTracker',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});