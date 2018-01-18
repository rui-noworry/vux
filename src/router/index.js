import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    hashbang: false,
    history: true,
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('@/components/HelloWorld'))
                })
            }
        }
    ]
})
