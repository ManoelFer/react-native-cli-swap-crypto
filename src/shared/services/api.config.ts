import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.swapzone.io/v1"
})

instance.interceptors.request.use(function (config) {
    if (config) {
        config.headers = { "x-api-key": "JKn0V6gwd" }
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    if (response) return response.data

    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance