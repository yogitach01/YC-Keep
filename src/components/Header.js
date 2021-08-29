import React from "react";

function Header(props) {
  const logo = (
    <img src="https://cdn1.vectorstock.com/i/thumb-large/47/40/yc-monogram-logo-vector-33144740.jpg"  alt="logo" />
  );
  return (
    <div className="header">
      {logo}
      <h1> Keep</h1>
    </div>
  );
}

export default Header;npx 