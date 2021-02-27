import axios from "axios";
import {LoginResponse} from "./model";

const API_URL = "api.test.com";

function getAxios() {
    const instance = axios.create({ baseURL: API_URL });
    const token = localStorage.getItem("token");
    instance.defaults.headers = { Auth: token };
    return instance;
}


export function sendLoginRequest(username: string, password: string): Promise<LoginResponse> {
    const payload = { username, password };
    return getAxios().post<LoginResponse>("/login", payload).then(data => data.data);
}

export function getOrganizations() {

}

export function getInventory() {

}

export function getItemGraphData() {

}

export function getLowItems() {

}

