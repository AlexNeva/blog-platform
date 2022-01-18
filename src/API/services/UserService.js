import { $http } from "../axios"

export default class UserService {

  async getUser() {
    return $http.get(`/user`)
  }

  async updateUser(data) {
    return $http.put(`/user`, data)
  }

  async registration(data) {
    return $http.post(`/users`, data)
  }


  async login(data) {
    return $http.post(`/users/login`, data)
  }

}