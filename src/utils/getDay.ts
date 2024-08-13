export default function getDay(stringDate: string) {
  const date = new Date(stringDate)
  const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' })

  return dayName
}
