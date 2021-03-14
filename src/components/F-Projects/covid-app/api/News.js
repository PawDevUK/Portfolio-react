import axios from 'axios';

export const GetNews = axios.get('https://strong-charge-305714.ew.r.appspot.com/covid').then((res) => {
    return res;
});
