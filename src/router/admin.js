const AdminRoutes = {
	path: 'admin',
	component: () => import('./../layouts/AdminLayout.vue'),
	meta: {
		title: 'Panel administracyjny'
	},
	children: [
		{
			path: '/',
			component: () => import('./../pages/dashboard/IndexPage.vue'),
			meta: {
				title: 'Kokpit'
			},
		}
	]
};

export { AdminRoutes };

