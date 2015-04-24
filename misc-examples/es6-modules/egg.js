import * as chicken from './chicken'
import sprintf from 'sprintf'

export function thesis () {
  return sprintf('You need the %s before the %s.', 
      sound(), chicken.sound())
}

export function sound () {
  return 'crack'
}
