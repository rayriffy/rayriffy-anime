import axios from 'axios'

export interface GraphQLResult<T = any> {
  data: T
}

export interface Media {
  Media: {
    id: number
    type: 'ANIME' | 'MANGA'
    format:
      | 'TV'
      | 'TV_SHORT'
      | 'MOVIE'
      | 'SPECIAL'
      | 'OVA'
      | 'ONA'
      | 'MUSIC'
      | 'MANGA'
      | 'NOVEL'
      | 'ONE_SHOT'
    bannerImage: string
    coverImage: {
      extraLarge: string
      large: string
      medium: string
      color: string
    }
    title: {
      romaji: string
      native: string
    }
    status: 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED'
    season: 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL'
    seasonYear: number
    episodes: number
    duration: number
    trailer: {
      id: string
      site: string
      thumbnail: string
    }
    siteUrl: string
    genres: string[]
    studios: {
      edges: {
        node: {
          name: string
        }
      }[]
    }
    isAdult: boolean
  }
}

export const getMedia = async (id: number) => {
  try {
    const query = `
      query ($id: Int) {
        Media(id: $id) {
          id
          type
          format
          bannerImage
          coverImage {
            extraLarge
            large
            medium
            color
          }
          title {
            romaji
            english
            native
          }
          status
          season
          seasonYear
          episodes
          duration
          trailer {
            id
            site
            thumbnail
          }
          siteUrl
          genres
          studios {
            edges {
              node {
                name
              }
            }
          }
          isAdult
        }
      }
    `

    const res = await axios.post<GraphQLResult<Media>>(
      'https://graphql.anilist.co',
      {
        query,
        variables: {
          id,
        },
      }
    )

    return res.data.data.Media
  } catch (e) {
    return null
  }
}
