import { lazy } from "react";
import { flattenRoutes } from "@/helpers";

const AdminOrders = lazy(() => import("../app/admin/(order)/orders/page"));
const AdminOrderDetails = lazy(() => import("../app/admin/(order)/orders/[orderId]/page"));

const adminRoutes = [
  {
    path: "/",
    name: "Orders",
    element: <AdminOrders />,
  },
  {
    path: "/:orderId",
    name: "Order Details",
    element: <AdminOrderDetails />,
  },
];

const allAdminRoutes = [...adminRoutes];

const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export {allAdminFlattedRoutes};