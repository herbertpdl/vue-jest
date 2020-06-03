import axios from 'axios'

export function getMoviesByTitleAndPage(title, page = 1) {
  return axios.get(`http://www.omdbapi.com/?apikey=9f4b1efd&s=${title}&page=${page}`)
}