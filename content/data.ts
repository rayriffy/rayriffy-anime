import { Anime } from './types'

import { season2010 } from './year/2010'
import { season2011 } from './year/2011'
import { season2012 } from './year/2012'
import { season2013 } from './year/2013'
import { season2014 } from './year/2014'
import { season2015 } from './year/2015'
import { season2016 } from './year/2016'
import { season2017 } from './year/2017'
import { season2018 } from './year/2018'
import { season2019 } from './year/2019'

export const data: Anime[] = [
  ...season2010,
  ...season2011,
  ...season2012,
  ...season2013,
  ...season2014,
  ...season2015,
  ...season2016,
  ...season2017,
  ...season2018,
  ...season2019
]
