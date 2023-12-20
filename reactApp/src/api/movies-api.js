export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ba80f6ba43b4967233a3bb118ffd0fae&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };