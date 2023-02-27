import axios from "axios";

const API_KEY = 'bfb089247bb1d6067836437ecb783621';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key : API_KEY
}

export const getTrendingMovie = async () => {
    try {
        const { data } = await axios.get('/trending/movie/week');
        return data;
    } catch (error) {
        return console.log(`Something was wrong: ${error}`);
    }
};

export const getMovieDetailsById = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}`);
        return data;
    } catch (error) {
        return console.log(`Something was wrong: ${error}`);
    }
}

export const getMovieCredits = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/credits`);
        return data;
    } catch (error) {
        return console.log(`Something was wrong: ${error}`);
    }
}

export const getMovieReviews = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/reviews`);
        return data;
    } catch (error) {
        return console.log(`Something was wrong: ${error}`);
    }
}

export const getMovieByName = async (query) => {
    try {
        const { data } = await axios.get(`/search/movie`, {
            params: {
                query
            }
        });
        return data;
    } catch (error) {
        return console.log(`Something was wrong: ${error}`);
    }
}