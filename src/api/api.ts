import axios from 'axios'
import { LoginResponse } from './model'
import { InventoryItem } from '../model/InventoryItem'

const API_URL = 'api.test.com'

function getAxios() {
    const instance = axios.create({ baseURL: API_URL })
    const token = localStorage.getItem('token')
    instance.defaults.headers = { Authentication: `Bearer ${token}` }
    return instance
}


export function login(username: string, password: string): Promise<LoginResponse> {
    const payload = { username, password }
    return getAxios().post<LoginResponse>('/login', payload).then(data => data.data)
}

export function setToken(token: string) {
    localStorage.setItem('token', token)
}

export function updateItem(item: InventoryItem) {

}

export function getOrganizations() {

}

export function getInventory() {

}

export function getItemGraphData() {

}

export function getLowItems() {

}

