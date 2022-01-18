import { $http } from "../axios"

export default class ArticlesService {


  async getAllArticles(limit, offset) {
    return $http.get(`/articles?limit=${limit}&offset=${offset}`)
  }

  async getArticle(slug) {
    return $http.get(`/articles/${slug}`)
  }

  async createArticle(data) {
    return $http.post(`/articles`, data)
  }

  async editArticle(id, data) {
    return $http.put(`/articles/${id}`, data)
  }

  async deleteArtile(id) {
    return $http.delete(`/articles/${id}`)
  }

  async addFavorites(slug) {
    return $http.post(`/articles/${slug}/favorite`)
  }

  async deleteFavorites(slug) {
    return $http.delete(`/articles/${slug}/favorite`)
  }

}