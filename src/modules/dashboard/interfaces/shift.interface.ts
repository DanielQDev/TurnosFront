export interface Schedule {
  day: string
  shifts: Shift[]
  id: any
}

interface Shift {
  id: number
  start_hour: string
  end_hour: string
  week: string
}
