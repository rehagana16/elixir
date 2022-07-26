import { Axios } from "../Config/Axios";
const API_URL = "/api/auth/";

const login = (username, password) => {
    return Axios.post(API_URL + "login", {
        Username: username,
        Password: password
    })
}

const AuthService = {
    login
}

export default AuthService;
