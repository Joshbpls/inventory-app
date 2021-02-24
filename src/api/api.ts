import axios from "axios";
import {LoginResponse} from "./model";

const API_URL = "api.test.com";

export function sendLoginRequest(username: string, password: string): Promise<LoginResponse> {
    const payload = { username, password };
    return axios.post<LoginResponse>(`${API_URL}/login`, payload).then(data => data.data);
}

export function getOrganizations() {

}

export function getInventory() {

}

export function getItemGraphData() {

}


export function getLowItems() {

}

