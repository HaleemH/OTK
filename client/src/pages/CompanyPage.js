import React, { useEffect, useState } from "react";

function CompanyPage({ vendorId }) {
  const [vendor, setVendor] = useState({});
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
console.log(vendor.email)
  return (
    <>
      <div className="company__hero"></div>
      <div>
        <h2>{vendor.name}</h2>
        {vendor.img}
        <br />
        Address: {vendor.address}
        <br />
        Website: {vendor.website}
        <br />
        Social: {vendor.social}
        <br />
        Menu: {vendor.menu}
        <br />
        Services: {vendor.services}
        <br />
        Phone: {vendor.phone}
        <br />
        Rating: {vendor.rating}
      </div>
    </>
  );
}

export default CompanyPage;
