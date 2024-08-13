export default function getMont(stringDate: string) {
  const date = new Date(stringDate)
  const monthName = date.toLocaleDateString('es-ES', { month: 'long' })

  return monthName
}
