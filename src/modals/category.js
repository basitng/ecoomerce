import React, { useEffect, useState } from "react";

export default function CategoryDropdown({ clicked, state }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (state) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [clicked]);
  return (
    <React.Fragment>
      {open ? (
        <div className="expanded-list">
          <li>Laptops</li>
          <li>Mobile apps</li>
          <li>Ear piece</li>
          <li>Gamepad</li>
          <li>Mouse</li>
        </div>
      ) : null}
    </React.Fragment>
  );
}
