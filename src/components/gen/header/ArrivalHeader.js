import { Typography } from "@material-ui/core";
import { AirplanemodeActive } from "@material-ui/icons";
import React from "react";

export default function ArivalHeader() {
  const styles = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingBottom: 20,
  };
  return (
    <div style={{ marginTop: 70 }}>
      <div style={styles}>
        <svg
          style={{ marginRight: 10 }}
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path
              d="M22.9347 12.001L24 10.1003L22.3995 8.62199L22.8254 6.48519L20.8463 5.57376L20.5911 3.40991L18.4273 3.15468L17.5158 1.17562L15.379 1.60157L13.9006 0.000976562L12 1.0663L10.0994 0.000976562L8.62106 1.60152L6.48427 1.17557L5.57283 3.15463L3.40898 3.40987L3.15375 5.57371L1.17469 6.48515L1.60064 8.62194L0 10.1003L1.06533 12.0009L0 13.9016L1.60055 15.3799L1.17459 17.5167L3.15366 18.4281L3.40889 20.592L5.57273 20.8472L6.48417 22.8263L8.62097 22.4003L10.0993 24.0009L11.9999 22.9356L13.9005 24.0009L15.3788 22.4003L17.5156 22.8263L18.4271 20.8472L20.5909 20.592L20.8462 18.4281L22.8252 17.5167L22.3993 15.3799L23.9998 13.9016L22.9347 12.001ZM8.62936 14.0641H7.61878L5.78016 11.7887V14.0641H4.50881V9.43504H5.49984L7.35802 11.7887V9.43504H8.62936V14.0641ZM12.7238 14.0641H9.42483V9.43504H12.6652V10.5434H10.6962V11.1954H12.3783V12.2255H10.6962V12.9557H12.7239V14.0641H12.7238ZM18.0765 14.0641H17.0203L16.3618 12.408L15.7098 14.0641H14.6536L12.8411 9.43504H14.2168L15.2209 12.6102L15.5403 11.6453L14.7905 9.43504H15.9576L16.3618 10.8629L16.7726 9.43504H17.9397L17.1768 11.6453L17.5094 12.6102L18.507 9.43504H19.8891L18.0765 14.0641Z"
              fill="#68C944"
            ></path>
          </g>
        </svg>
        <Typography className="bold-text" variant="h5" color="secondary">
          New Arrivals
        </Typography>
      </div>
    </div>
  );
}