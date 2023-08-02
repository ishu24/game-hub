import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key:'d3b1cc02382f41c0a7512da1601d9a9f'
    }
});