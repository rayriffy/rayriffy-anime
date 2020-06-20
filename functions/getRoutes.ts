import { getQuery } from './getQuery'

import { data } from '../content/data'

export const getRoutes = async () => {
  return await Promise.all(
    data.map(async data => {
      const rawQuery = await getQuery(data.id)

      return {
        route: '/anime/' + data.id,
        payload: {
          ...data,
          raw: rawQuery,
        },
      }
    })
  )
}
