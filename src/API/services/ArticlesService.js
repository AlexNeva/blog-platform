// import axios from 'axios'
import { $auth, $noAuth } from "../axios"

export default class ArticlesService {


  async getAllArticles(limit, offset) {
    return $noAuth.get(`/articles?limit=${limit}&offset=${offset}`)

    // this.getResource(`articles?limit=${limit}&offset=${offset}`)
  }

  async getArticle(slug) {
    return $noAuth.get(`/articles/${slug}`)

    // this.getResource(`articles/${slug}`)
  }

  async createArticle(data) {
    return $auth.post(`/articles`, data)
  }

  async editArticle(id, data) {
    return $auth.put(`/articles/${id}`, data)
  }

  async deleteArtile(id) {
    return $auth.delete(`/articles/${id}`)
  }

}