const BASE_API = "https://yts.am/api/v2"

class Api {
  async getSuggestions(id){
    try{
      console.log('Intento de peticion 1');
      const query = await fetch(`${BASE_API}/movie_suggestions.json?movie_id=${id}`)
      //Para parsear los datos que me llegan de la API utilizo el metodo json()
      const { data } = await query.json()

      return data.movies
    }
    catch(e){
      console.log('Ha ocurrido un error')
    }
  }

  async getMovies(){
      try{
        console.log('Intento de peticion 2');
        const query = await fetch(`${BASE_API}/list_movies.json?`)
        const { data } = await query.json()

        return data.movies
      }
      catch(e){
        console.log('Ha ocurrido un error')
      }
  }
}

export default new Api()
