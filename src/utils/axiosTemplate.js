import axios from 'axios'

const backendURL = 'http://dennis1254-001-site1.gtempurl.com';


export default function axiosTemplate(url, method, data, token) {
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