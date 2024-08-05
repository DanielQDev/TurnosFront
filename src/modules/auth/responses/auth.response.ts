import type { LoginUser } from '../interfaces/user.interface'

export interface AuthResponse {
  user: LoginUser
  authorization: string
}
