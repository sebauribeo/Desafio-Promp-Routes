import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import(/* webpackChunkName: "inicio" */ './components/Inicio.vue')
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import(/* webpackChunkName: "sobremi" */ './components/SobreMi.vue')
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import(/* webpackChunkName: "contacto" */ './components/Contacto.vue')
        },
        {
            path: '/post',
            name: 'post',
            component: () => import(/* webpackChunkName: "post" */ './components/Post.vue'), 
            children: [
                {
                    path: ':articulo',
                    component: () => import(/* webpackChunkName: "articulos" */ './components/Articulo.vue')
                }
            ]
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "NotFound" */ './components/NotFound.vue')
        }
    ]
})