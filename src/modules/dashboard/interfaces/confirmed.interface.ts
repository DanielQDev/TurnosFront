export interface Confirmed {
  day: string
  shifts: Shift[]
  id: any
}

interface Shift {
  id: number
  start_hour: string
  end_hour: string
  is_confirmed: boolean
  user_name: string
  color: string
}
