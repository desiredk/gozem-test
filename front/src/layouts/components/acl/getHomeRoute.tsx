/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/web/admin/package' // '/dashboards/analytics'
}

export default getHomeRoute
