export default class PostsService {


  API_BASE = 'http://kata.academy:8022/'


  async getResource(url) {

    const res = await fetch(`${this.API_BASE}${url}`);

    if (!res.ok) {
      throw new Error('error')
    }

    return res.json();
  }

  getAllArticles(limit, offset) {
    return this.getResource(`articles?limit=${limit}&offset=${offset}`)
  }

  getArticle(slug) {
    return this.getResource(`articles/${slug}`)
  }

}