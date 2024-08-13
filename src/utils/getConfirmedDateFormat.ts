import getDay from './getDay'
import getMont from './getMonth'

export default function getConfirmedDateFormat(stringDate: string) {
  const date = new Date(stringDate)
  const dateNumber = date.getDate()
  return `${getDay(stringDate)} ${dateNumber.toString().padStart(2, '0')} de ${getMont(stringDate)}`
}
