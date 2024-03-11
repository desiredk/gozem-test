// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  const userData = JSON.parse(window.localStorage.getItem('userData') as string)

  console.log('userData.roless : ', userData.roless)

  const navArray: any = [
    {
      title: 'Web Tracker',
      icon: 'tabler:database',
      path: '/web/tracker'
    },
    {
      title: 'Web Driver',
      icon: 'tabler:robot',
      path: '/web/driver'
    },
    {
      title: 'Web Admin',
      icon: 'tabler:dashboard',
      children: [
        {
          title: 'Delivery',
          path: '/web/admin/delivery'
        },
        {
          title: 'Package',
          path: '/web/admin/package'
        }
      ]
    }
  ]

  // navArray.push(TransactionHistory)
  // navArray.push(ListOfPOS)
  // navArray.push(ListOfAgencies)
  // navArray.push(Partners)
  // navArray.push(UsersList)

  return navArray

  // return [
  //   Dashboard,
  //   {
  //     sectionTitle: 'Partners & Deals'
  //   },
  //   TransactionHistory,
  //   ListOfPOS,
  //   ListOfAgencies,
  //   Partners,
  //   UsersList
  // ]
}

export default navigation
