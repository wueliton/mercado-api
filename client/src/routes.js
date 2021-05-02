// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import CadastroProduto from "views/CadastroProduto/CadastroProduto.js";
// core components/views for RTL layout


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Cadastro de Produto",
    icon: Person,
    component: CadastroProduto,
    layout: "/admin"
  },
];

export default dashboardRoutes;
