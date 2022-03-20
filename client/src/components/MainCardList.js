import React from "react";
import MainCard from "./MainCard";
function MainCardList({ vendors, setVendorPage }) {
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
              setVendorPage={setVendorPage}
            />
            <h3>{vendor.name}</h3>
          </>
        );
      })}
    </div>
  );
}

export default MainCardList;
