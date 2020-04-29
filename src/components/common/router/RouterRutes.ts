/*
    Rutas de la aplicación
*/

import Home from '../../home/Home'
import Faqs from '../../faqs/Faqs'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/faqs',
        component: Faqs
    }
] as any

export default routes