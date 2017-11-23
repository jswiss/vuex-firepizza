import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue';
import About from './components/About.vue';
import History from './components/History.vue';
import Delivery from './components/Delivery.vue';
import Contact from './components/Contact.vue';
import OrderingGuide from './components/OrderingGuide.vue';

export const routes = [
	{
		path: '/',
		name: 'homeLink',
		components: {
			default: Home,
			'ordering-guide': OrderingGuide,
			delivery: Delivery,
			history: History,
		},
	},
	{ path: '/menu', name: 'menuLink', component: Menu },
	{
		path: '/about',
		name: 'aboutLink',
		component: About,
		children: [
			{ path: '/history', name: 'historyLink', component: History },
			{ path: '/delivery', name: 'deliveryLink', component: Delivery },
			{ path: '/contact', name: 'contactLink', component: Contact },
			{
				path: '/ordering-guide',
				name: 'orderingLink',
				component: OrderingGuide,
			},
		],
	},
	{
		path: '/admin',
		name: 'adminLink',
		component: Admin,
		beforeEnter: (to, from, next) => {
			alert(
				'This area is for authorised users only. Please login to continue.'
			);
			next();
		},
	},
	{ path: '*', redirect: '/' },
];
