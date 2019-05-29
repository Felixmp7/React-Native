const BASE_API = "https://yts.am/api/v2"

class Api {
  async getSuggestions(id){
    const query = await fetch(`${BASE_API}/movie_suggestions.json?movie_id=${id}`)
    //Para parsear los datos que me llegan de la API utilizo el metodo json()
    const { data } = await query.json()

    return data.movies
  }
}

export default new Api()
