
import { $auth, $noAuth } from "../axios"

export default class UserService {

  async getUser() {
    return $auth.get(`/user`)
  }

  async updateUser(data) {
    return $auth.put(`/user`, data)
  }

  async registration(data) {
    return $noAuth.post(`/users`, data)
  }


  async login(data) {
    return $noAuth.post(`/users/login`, data)
  }

}