import axios from 'axios'
import { LoginResponse } from './model'
import { InventoryItem } from '../model/InventoryItem'

const API_URL = 'http://localhost:5000/'

function getAxios() {
    const instance = axios.create({ baseURL: API_URL })
    const token = localStorage.getItem('token')
    instance.defaults.headers = { Authorization: `Bearer ${token}` }
    return instance
}


export function login(email: string, password: string): Promise<LoginResponse> {
    const payload = { email, password }
    return getAxios().post<LoginResponse>('/login', payload).then(res => res.data)
}

export function register(email: string, name: string, password: string) {
    const payload = { email, name, password };
    return getAxios().post('/register', payload).then(res => res.data)
}

export function refresh() {
    return getAxios().get('/refresh').then(res => res.data)
}

export function setToken(token: string) {
    localStorage.setItem('token', token)
}

export function updateItem(item: InventoryItem) {

}

export function createOrganization(name: string) {
    return getAxios().post('/org/create', { name }).then(res => res.data)
}

export function getOrganizations() {
    return getAxios().get('/user/orgs').then(res => res.data)
}

export function getInventory() {

}

export function getItemGraphData() {

}

export function getLowItems() {

}

