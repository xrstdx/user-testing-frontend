import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store{
    isAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool: boolean){
        this.isAuth = bool;
    }
    async login(username: string, password: string)
    {
        const response = await AuthService.login(username, password);
        localStorage.setItem('token', response);
        this.setAuth(true);
      
    }

    
    async logout()
    {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        this.setAuth(false);
    }
}