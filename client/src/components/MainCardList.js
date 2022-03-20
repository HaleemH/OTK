import React from "react";
import MainCard from "./MainCard";
function MainCardList({ vendors, setVendorId }) {
  return (
    <div>
      {vendors.map((vendor) => {
        return (
          <>
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
          </>
        );
      })}
    </div>
  );
}

export default MainCardList;
