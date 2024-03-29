import axios from 'axios'

const backendURL = 'https://backend.alphalex.com.ng';


export default function axiosTemplate(url, method, data, token, responseType) {
    return axios({
        url: backendURL + url,
        method: method,
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        
    });
}