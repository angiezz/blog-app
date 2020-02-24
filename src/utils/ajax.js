import axios from 'axios';
import qs from 'qs';

const API = {
    ROOT: process.env.NODE_ENV === 'development' ? 'http://localhost:7001/' : 'http://47.92.161.159/',
    // ROOT: 'http://localhost:7001/',
};
axios.defaults.baseURL = API.ROOT;

axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.method === 'post') {
        config.data = qs.stringify({
            ...config.data,
        });
    }
    return config;
});

axios.interceptors.response.use((config) => {
    return config;
});


export default function ajax(options) {
    return axios(options).then((res) => {
        if (res && res.status === 200) {
            return res.data.data;
        }

        throw new Error(res.msg || '系统错误');
    });
}

