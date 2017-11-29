import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { routes } from './routes';
import { store } from './store/index';

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history', //removes hash from url
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash,
			};
		}
	},
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});
