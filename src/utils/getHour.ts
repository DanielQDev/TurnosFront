export default function getHour(dateTime: string) {
  const date = new Date(dateTime)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}
