import axios from 'axios';
import { ApiUrls } from './URLS';

const AxiosService = {
    async getMovies(payload) {
        let {url, page} = payload
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url + `&page=${page}`, {
            headers: requestHeader,
        })
    },
    async getMovieDetail(payload) {

        let {url} = payload
        let requestHeader = {
            'Content-Type': 'application/json',
        };
        return axios.get(ApiUrls.BASE_URL + url, {
            headers: requestHeader,
        })
    },
    async getMovieGenres(payload) {
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
