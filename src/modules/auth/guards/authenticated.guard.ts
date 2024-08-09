import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return next({
      name: 'login'
    })
  }
  return next()
}

export default isAuthenticatedGuard
