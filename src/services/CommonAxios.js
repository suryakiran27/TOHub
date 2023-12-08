import axios from "axios";

export const CommonAxiosInstance = ()=>{
    const instance = axios.create({
        baseURL: "http://localhost:4000",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            });
}