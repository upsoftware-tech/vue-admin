import AdminLayout from "../layouts/AdminLayout.vue";
import DashboardPage from "../pages/dashboard/IndexPage.vue";

const AdminRoutes = {
	path: '/admin',
	component: AdminLayout,
	meta: {
		title: 'Panel administracyjny'
	},
	children: [
		{
			path: '/',
			component: DashboardPage,
			name: 'admin',
			meta: {
				title: 'Kokpit'
			},
		}
	]
};

export { AdminRoutes };

