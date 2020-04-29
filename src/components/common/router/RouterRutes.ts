/*
    Rutas de la aplicación
*/

import Home from '../../home/Home'
import Faqs from '../../faqs/Faqs'
import AboutMe from '../../about-me/AboutMe'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/faqs',
        component: Faqs
    },
    {
        path: '/about-me',
        component: AboutMe
    }
]

export default routes