import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
//import config from 'config';

Vue.use(VueResource);
Vue.use(VueRouter);

import app from './containers/app.vue'
import demo from './containers/demo.vue';
import home from './views/home.vue';
import homelink from './containers/homelink.vue';
import settings from './views/settings.vue';

Vue.component('app', app);
Vue.component('demo', demo);
Vue.component('home', home);
Vue.component('homelink', homelink);
Vue.component('settings', settings);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: home },
        { path: '/settings', component: settings },
    ]
});

export default router;

new Vue({
    router: router,
    el: 'body',
    render: (h) => h(app)
})