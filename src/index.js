import AdminLayout from "./layouts/AdminLayout.vue";
import DashboardPage from "./pages/dashboard/IndexPage.vue";
import { AdminRoutes } from "./router/admin.js";
import UpsoftInputText from "./components/input/Text.vue";

const components = {
	AdminLayout,
	DashboardPage,
	UpsoftInputText,
};

const install = (app) => {
	Object.keys(components).forEach((key) => {
		app.component(key, components[key]);
	});
};

export {
	AdminLayout,
	DashboardPage,
	UpsoftInputText,
	AdminRoutes,
}

export default {
	install
}