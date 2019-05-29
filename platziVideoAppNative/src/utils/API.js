const BASE_API = "https://yts.am/api/v2"

class Api {
  async getSuggestions(id){
    const query = await fetch(`${BASE_API}/movie_suggestions.json?movie_id=${id}`)
  }
}

export default new Api()
