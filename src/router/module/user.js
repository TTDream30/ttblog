const userRouters = [{
    path: '/sign-in',
    name: 'Sign-In',
    component: () => import('@/views/Sign-In.vue'),
}, {
    path: '/sign-up',
    name: 'Sign-Up',
    meta: {
        layoutClass: 'layout-sign-up',
    },
    component: () => import('@/views/Sign-Up.vue'),
}, {
    path: '/Profile',
    name: 'Profile',
    layout: "dashboard",
    meta: {
        layoutClass: 'layout-profile',
        auth: true
    },
    component: () => import('@/views/Profile.vue'),
}, ]

export default userRouters