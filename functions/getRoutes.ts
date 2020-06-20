import { data } from '../content/data'

export const getRoutes = () => {
  return data.map(anime => `/anime/${anime.id}`)
}
