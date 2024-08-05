import AdminLayout from "../layouts/AdminLayout.vue";

const adminRoute = [
	{
		path: 'admin',
		component: AdminLayout,
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
	}
];

export default adminRoute;

