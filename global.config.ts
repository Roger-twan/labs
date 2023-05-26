import getConfig from 'next/config'

const PUBLIC_ASSETS_PREFIX = getConfig().publicRuntimeConfig.publicAssetsPrefix
const NAV_LIST: NavItem[] = [
  {
    title: 'AI',
    route: '/ai',
  },
  {
    title: '3D',
    route: '/3d',
  },
  {
    title: 'ABOUT',
    route: '/about',
  },
]

export { PUBLIC_ASSETS_PREFIX, NAV_LIST }
