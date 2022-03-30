import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
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
  console.log(vendorId);
  return (
    <>
      {vendorId ? (
        <div>
          <div className="company__hero"></div>
          <div className="company__container">
            <Zoom>
              <div>
                <h2>{vendor.name}</h2>
                <img src={vendor.img} />
                <br />
                {vendor.services ? (
                  <span>
                    Providing: {vendor.services}
                    <br />
                  </span>
                ) : null}

                {vendor.address ? (
                  <span>
                    Address: {vendor.address}
                    <br />
                  </span>
                ) : null}

                {vendor.website ? (
                  <span>
                    Website:{" "}
                    <a href={`https://www.${vendor.website}`}>
                      {vendor.website}
                    </a>
                    <br />
                  </span>
                ) : null}

                {vendor.social ? (
                  <span>
                    Instagram: {vendor.social} <br />
                  </span>
                ) : null}

                {vendor.phone ? (
                  <span>
                    Phone: {vendor.phone} <br />
                  </span>
                ) : null}

                {vendor.menu ? (
                  <button onClick={handleMenu} className="company_button">
                    Menu
                  </button>
                ) : null}
              </div>
            </Zoom>
            <ul>
              {showMenu ? (
                <div>
                  <h3>Menu</h3>
                  {menuItems.map((item) => (
                    <Menu item={item} />
                  ))}
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      ) : (
        setShowServices(vendorId)
      )}
    </>
  );
}

export default CompanyPage;
