import React from "react";
import Desktop from "../unauth/AppBar/Desktop";
import BottomNav from "../unauth/AppBar/BottomNav";
import Mobile from "../unauth/AppBar/Mobile";

export default function Navigation() {
  return (
    <div>
      <Desktop />
      <div className="appBar-mobile">
        <Mobile />
      </div>

      <div className="bottom-nav">
        <BottomNav />
      </div>
    </div>
  );
}
