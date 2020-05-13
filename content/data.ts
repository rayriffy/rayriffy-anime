import { Anime } from './types'

import { fall2010 } from './year/2010/fall'
import { spring2010 } from './year/2010/spring'
import { summer2010 } from './year/2010/summer'
import { winter2010 } from './year/2010/winter'

import { fall2011 } from './year/2011/fall'
import { spring2011 } from './year/2011/spring'
import { summer2011 } from './year/2011/summer'
import { winter2011 } from './year/2011/winter'

import { fall2012 } from './year/2012/fall'
import { spring2012 } from './year/2012/spring'
import { summer2012 } from './year/2012/summer'
import { winter2012 } from './year/2012/winter'

export const data: Anime[] = [
  ...fall2010,
  ...spring2010,
  ...summer2010,
  ...winter2010,
  ...fall2011,
  ...spring2011,
  ...summer2011,
  ...winter2011,
  ...fall2012,
  ...spring2012,
  ...summer2012,
  ...winter2012
]
