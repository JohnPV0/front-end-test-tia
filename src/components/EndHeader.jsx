import { Navbar, Nav } from "react-bootstrap";
import "../assets/css/EndHeader.css";
import { useState } from "react";

export default function EndHeader() {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsing = () => {
    if (!collapsed) {
      setTimeout(() => {
        setCollapsed(!collapsed);
      }, 250);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <div className='end-header-container'>
        <span className="rectangle"></span>
        <div className="buttons">
          <Navbar expand="lg" className="navbar-container-end-header">
            <div className="nav-toggle-end-header">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleCollapsing}
                className="navbar-toggler-end-header"
              />
            </div>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={!collapsed && "show-end-header"}
            >
              <Nav className="ml-auto nav-items">
                <button className="nav-link nav-link-end-header">
                  Inicio
                </button>
                <button className="nav-link nav-link-end-header">
                  Nosotros
                </button>
                <button className="nav-link nav-link-end-header">
                  Servicios
                </button>
                <button className="nav-link nav-link-end-header">
                  Contacto
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
  );
}
