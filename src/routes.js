
export default [
    {
        path: '/market',
        component: () => import('./components/Market')
    },
    {
        path: '/store',
        component: () => import ('./components/MainVue'),
        children : [
            {
                path: '',
                component : () => import ('./components/Products')
            },
            {
                path: 'add_listing',
                component : () => import('./components/AddListing')
            }
        ]
    },
    {
        path: '/dashboard',
        component: () => import ('./components/AdminDashbord'),
        children : [
            {
                path: '',
                component : () => import('./components/AdminRoute')
            },
            {
                path: 'users',
                component : () => import('./components/UserRoute')
            }
        ],
        meta: {
            is_admin: true
        }
    },
]

