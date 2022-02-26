import React, { useContext } from "react";
import Desktop from "../unauth/AppBar/Desktop";
import BottomNav from "../unauth/AppBar/BottomNav";
import Mobile from "../auth/AppBar/Mobile";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/providers/AuthContext";
import DesktopAuthenticated from "../auth/AppBar/Desktop";
import AuthenticatedBottomNav from "../auth/AppBar/BottomNav";
import { useCart } from "react-use-cart";

export default function Navigation({ show_off_in }) {
  const { totalItems } = useCart();
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  console.log(location.pathname);
  return (
    <div>
      {isAuthenticated.isLoggedIn ? (
        <>
          {show_off_in && location.pathname == `/${show_off_in}` ? (
            <DesktopAuthenticated totalItems={totalItems} display="none" />
          ) : (
            <DesktopAuthenticated totalItems={totalItems} display={"block"} />
          )}
        </>
      ) : (
        <>
          {show_off_in && location.pathname == `/${show_off_in}` ? (
            <Desktop totalItems={totalItems} display="none" />
          ) : (
            <Desktop totalItems={totalItems} display={"block"} />
          )}
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
