import axios from 'axios';
import { ApiUrls } from './URLS';

const AxiosService = {
    async getMovies(payload) {
        console.log("🚀 ~ file: axiosServices.js:6 ~ getMovies ~ page:", payload.page)
        console.log("🚀 ~ file: axiosServices.js:6 ~ getMovies ~ url:", payload.url)
        let {url, page} = payload
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url + `&page=${page}`, {
            headers: requestHeader,
        })
    },
    async getMovieDetail(payload) {
        console.log("🚀 ~ file: axiosServices.js:6 ~ getMovies ~ url:", payload.url)
        let {url} = payload
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url, {
            headers: requestHeader,
        })
    },
    async getMovieGenres(payload) {
        console.log("🚀 ~ file: axiosServices.js:6 ~ getMovies ~ url:", payload.url)
        let {url} = payload
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url, {
            headers: requestHeader,
        })
    },
    async getTrailer(payload) {
        console.log("🚀 ~ file: axiosServices.js:6 ~ getMovies ~ url:", payload.url)
        let {url} = payload
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url, {
            headers: requestHeader,
        })
    },
};
export default AxiosService
