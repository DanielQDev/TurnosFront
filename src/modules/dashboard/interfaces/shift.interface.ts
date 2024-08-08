export interface Shift {
  day: number
  date: string
  schedule: Schedule[]
}

interface Schedule {
  id: number
  start_hour: string
  end_hour: string
  is_confirmed: boolean
}
