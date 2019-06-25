import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import storeData from './store'
import routes from './routes'
import Vuex from 'vuex'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);


const store = new Vuex.Store(storeData);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
