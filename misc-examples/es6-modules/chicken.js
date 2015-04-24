import * as egg from './egg'
import sprintf from 'sprintf'

export function thesis () {
  return sprintf('You need the %s before the %s.', 
      sound(), egg.sound())
}

export function sound () {
  return 'cluck'
}
