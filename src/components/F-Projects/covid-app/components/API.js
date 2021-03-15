import axios from 'axios';

export const GetNews = axios.get('https://strong-charge-305714.ew.r.appspot.com/covid/newsUK').then((res) => {
    return res;
});
export const GetStats = axios.get('https://strong-charge-305714.ew.r.appspot.com/covid/stats').then((res) => {
    return res;
});
