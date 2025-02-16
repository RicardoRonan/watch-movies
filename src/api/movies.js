import axios from "axios";

const URL = "https://vidsrc.xyz/movies/latest/page-1.json";


export const getMovies = async (query) => {
    const { data } = await axios.get(URL);

    console.log("Data received from API:", data);
    return data;
};