import React from "react";
import MainCard from "./MainCard";
import Zoom from "react-reveal/Zoom";
function MainCardList({ vendors, setVendorId }) {
  return (
    <div className="card__container">
      {vendors.map((vendor) => {
        return (
          <>
            <div className="vendor__card">
              <Zoom className="zoom__card">
                <MainCard
                  key={vendor.id}
                  id={vendor.id}
                  name={vendor.name}
                  address={vendor.address}
                  social={vendor.social}
                  menu={vendor.menu}
                  services={vendor.services}
                  phone={vendor.phone}
                  rating={vendor.rating}
                  img={vendor.img}
                  website={vendor.website}
                  setVendorId={setVendorId}
                />
              </Zoom>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default MainCardList;
