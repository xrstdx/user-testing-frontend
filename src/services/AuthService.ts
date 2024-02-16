import $api from "../http"
import { AxiosResponse } from "axios"
import { AuthResponse } from "../models/response/AuthResponse"

export default class AuthService {
    static async login(username: string, password: string): Promise<string> {
        const response = await $api.post('/auth/login', { username, password });
        const token = response.data; 
        localStorage.setItem('token', token); 
        return token; 
       
    }

    static async logout(): Promise<void>{
        return $api.post('/logout')
    }
}