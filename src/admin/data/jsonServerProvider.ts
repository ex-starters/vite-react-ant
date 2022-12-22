import axios from "axios"

export default function jsonServerProvider(url) {
    return {
        getList: (name) => {
            return axios.get(`${url}/${name}`);
        }
    }

}