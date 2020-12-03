import Vue from 'vue'
import Router from 'vue-router'
const lazy = () => import ('./components/lazyLoading.vue');

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import(/* webpackChunkName: "inicio" */ './components/Inicio.vue'),
            children: [
                {
                    path: '',
                    components: {
                        lazyloading: lazy
                    },
                },
            ]
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import(/* webpackChunkName: "sobremi" */ './components/SobreMi.vue'),
            alias: ['/acerca'],
            children: [
                {
                    path: '',
                    components: {
                        lazyloading: lazy
                    },
                },
            ]
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import(/* webpackChunkName: "contacto" */ './components/Contacto.vue'),
            alias: ['/contactame'],
            children: [
                {
                    path: '',
                    components: {
                        lazyloading: lazy
                    },
                },
            ]
        },
        {
            path: '/post',
            name: 'post',
            component: () => import(/* webpackChunkName: "post" */ './components/Post.vue'), 
            children: [
                {
                    path: ':articulo',
                    component: () => import(/* webpackChunkName: "articulos" */ './components/Articulo.vue'),
                    children: [
                        {
                            path: '',
                            components: {
                                lazyloading: lazy
                            },
                        },
                    ]

                }
            ]
        },
        {
            path: '/administrador/simple',
            component: () => import(/* webpackChunkName: "NotFound" */ './components/AdministradorTotal.vue')
        },
        {
            path: '/administrador/avanzado',
            component: () => import(/* webpackChunkName: "NotFound" */ './components/AdministradorAvanzado.vue')
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "inicio" */ './components/Inicio.vue'),
            redirect: '/'
        },
        {
            path: '/inicio',
            component: () => import(/* webpackChunkName: "inicio" */ './components/Inicio.vue'),
            redirect: '/'
        },
        {
            path: '/portada',
            component: () => import(/* webpackChunkName: "inicio" */ './components/Inicio.vue'),
            redirect: '/'
        },
    
        {
            path: '*',
            component: () => import(/* webpackChunkName: "NotFound" */ './components/NotFound.vue')
        }
    ]
})