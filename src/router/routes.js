import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/table-render',
        name: 'TableReder',
        component: () => import('@/views/table-render.vue')
      },
      {
        path: '/table-slot',
        name: 'TableSlot',
        component: () => import('@/views/table-slot.vue')
      },
      {
        path: '/tree',
        name: 'Tree',
        component: () => import('@/views/tree.vue')
      }
    ]
  }
]

export default routes