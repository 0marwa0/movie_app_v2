import React from "react";
import { Context } from "./Home";
function Header({ imgSrc }) {
  const value = React.useContext(Context);
  return <div className="white-color">{value}</div>;
}
export default Header;
