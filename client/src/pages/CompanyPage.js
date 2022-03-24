import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";

function CompanyPage({ vendorId }) {
  const [vendor, setVendor] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  useEffect(() => {
    fetch(`/vendors/${vendorId}`)
      .then((r) => r.json())
      .then((res) => {
        if (res.name) {
          setVendor(res);
        } else {
          alert(res.errors);
        }
      });
  }, []);

  function handleMenu() {
    let menu = vendor.menu;
    setMenuItems(menu.split(","));
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="company__hero"></div>
      <div className="company__container">
        <div>
          <h2>{vendor.name}</h2>
          <img src={vendor.img} />
          <br />
          Address: {vendor.address}
          <br />
          Website:{" "}
          <a href={`https://www.${vendor.website}`}>{vendor.website}</a>
          <br />
          Instagram: {vendor.social}
          {/* Menu: {vendor.menu} */}
          {/* Services: {vendor.services} */}
          <br />
          Phone: {vendor.phone}
          <br />
          {vendor.menu ? (
            <button onClick={handleMenu} className="company_button">
              Menu
            </button>
          ) : (
            <button
              onClick={() => setShowServices(!showServices)}
              className="company_button"
            >
              Services
            </button>
          )}
        </div>
        <ul>
          {showMenu ? (
            <div>
              <h3>Menu</h3>
              {menuItems.map((item) => <Menu item={item} />)}
            </div>
          ) : null}
        </ul>
      </div>
    </>
  );
}

export default CompanyPage;
