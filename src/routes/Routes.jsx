import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { allAdminFlattedRoutes } from "./index";

const AllRoutes = (props) => {
  return (
    <Routes>
      <Route>
        {allAdminFlattedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<AdminLayout {...props}>{route.element}</AdminLayout>}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
