/*
    Rutas de la aplicación
*/

import WhoIam from '../../whoIam/WhoIam'
import AboutMe from '../../about-me/AboutMe'
import Technologies from '../../technologies/Technologies'
import Contact from '../../contact/Contact'

const routes = [
    {
        path: '/',
        component: WhoIam
    },
    {
        path: '/about-me',
        component: AboutMe
    },
    {
        path: '/technologies',
        component: Technologies
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default routes