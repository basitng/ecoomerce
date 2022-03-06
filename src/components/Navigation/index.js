import React, { useContext } from "react";
import Desktop from "../unauth/AppBar/Desktop";
import BottomNav from "../unauth/AppBar/BottomNav";
import Mobile from "../auth/AppBar/Mobile";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/providers/AuthContext";
import DesktopAuthenticated from "../auth/AppBar/Desktop";
import AuthenticatedBottomNav from "../auth/AppBar/BottomNav";
import { useCart } from "react-use-cart";

export default function Navigation({ show_off_in_all }) {
  const { totalItems } = useCart();
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  console.log(location.pathname);
  return (
    <div>
      {isAuthenticated.isLoggedIn ? (
        <>
          <DesktopAuthenticated totalItems={totalItems} />
        </>
      ) : (
        <>
          <Desktop totalItems={totalItems} />
        </>
      )}

      <div className="appBar-mobile">
        <Mobile />
      </div>

      <div className="bottom-nav">
        {isAuthenticated.isLoggedIn ? (
          <AuthenticatedBottomNav />
        ) : (
          <BottomNav />
        )}
      </div>
    </div>
  );
}
