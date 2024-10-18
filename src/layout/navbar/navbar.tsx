import SidebarOverlay from "../sidebar/sidebar";
import styles from "./navbar.module.scss";
import { Toolbar } from "primereact/toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

enum RoutePathEnum {
  sharemeal = "Share Meal",
  dashboard = "Dashboard",
  analytics = "Analytics",
  resturantList = "resturant",
}

function getBreadcrumb(routePath: string): string {
  return (
    RoutePathEnum[routePath as keyof typeof RoutePathEnum] || "Unknown Route"
  );
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[0];
  const breadcrumb = lastSegment ? getBreadcrumb(lastSegment) : "Unknown Route";

  const startContent = (
    <div className="flex align-items-center">
      {/* <SidebarOverlay /> */}
      <div className="flex gap-2">
        <img src={"LTTSLogo"} alt="LTTS" width="25px" height="25px" />
        <p className="m-0 text-lg font-bold pr-2 ">LTTS Meal Match</p>
      </div>

      {/* <p className="flex gap-2 m-0  font-semibold text-sm text-color-secondary"><span>|</span>Studio</p> */}
    </div>
  );

  return (
    <>
      <Toolbar
        start={startContent}
        className={`surface-50 p-0 px-2 bg-red-900 border-noround border-none ${styles["topbarContainer"]}`}
      />
      <div className="flex justify-content-between align-items-center">
        <p className="font-bold text-lg px-3">{breadcrumb}</p>
        {breadcrumb === "Dashboard" ? (
          <Button
            label="Cart"
            icon="pi pi-cart-arrow-down"
            className="h-2rem mr-5"
            outlined
            onClick={() => navigate("/dashboard/cart")}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
