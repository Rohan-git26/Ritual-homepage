import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="main-container" style={{marginInline : 20}}>
        <ul style={{display : "flex",justifyContent : "space-between"}}>
        <li class="nav-item">
            Menu
      </li>
      <li className="navbar-brand">Ritual</li>

          <li style={{position : "relative",left: -120}}>
          <li className="nav-item active">
            Who we are
          </li>
          <li className="nav-item" style={{paddingLeft : 20}}>
            logo
          </li>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
