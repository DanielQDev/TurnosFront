export default function getDateFormat(isoDate: string) {
  const date = new Date(isoDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
}
