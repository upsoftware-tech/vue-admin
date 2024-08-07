import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../pages/dashboard/IndexPage.vue';

const routes = [
	{
		path: '/',
		component: () => import('../layouts/AdminLayout.vue'),
		children: [
			{
				path: '',
				component: DashboardPage,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
export { routes as AdminRoutes };