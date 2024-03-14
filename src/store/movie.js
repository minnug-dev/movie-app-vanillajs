import { Store } from "../core/heropy"

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store 
export const searchMovies = async page => {
  const res = await fetch(`https://omdbapi.com?apikey=dc015b69&s=${store.state.searchText}&page=${page}`)
  const json = await res.json()
  console.log(json)
}