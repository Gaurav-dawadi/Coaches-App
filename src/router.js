import { createRouter, createWebHistory } from 'vue-router'
// import ContactCoach from './pages/requests/ContactCoach.vue'
// import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        // {
        //     path: '/coaches', 
        //     component: CoachesList,
        //     children: [
        //         {path: 'contact', component: ContactCoach}
        //     ]
        // },
        // {path: 'coaches/:id', component: CoachDetail},
        {path: '/register', component: CoachRegister},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router;