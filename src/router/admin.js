import AdminLayout from "../layouts/AdminLayout.vue";

const AdminRoutes = [
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

export default AdminRoutes;

