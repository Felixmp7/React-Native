const BASE_API = "https://yts.lt/api/v2"

class Api {
  async getSuggestions(id){
    try{
      const query = await fetch(`${BASE_API}/movie_suggestions.json?movie_id=${id}`)
      //Para parsear los datos que me llegan de la API utilizo el metodo json()
      const { data } = await query.json()

      return data.movies
    }
    catch(e){
      console.log('Ha ocurrido un error en la llamada a las sugerencias')
      console.log(e);
    }
  }

  async getMovies(){
      try{
        const query = await fetch(`${BASE_API}/list_movies.json?`)
        const { data } = await query.json()

        return data.movies
      }
      catch(e){
        console.log('Ha ocurrido un error en la llamada a las peliculas')
        console.log(e);
      }
  }
}

export default new Api()
