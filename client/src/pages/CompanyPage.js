import React,{ useEffect, useState } from 'react'

function CompanyPage({vendorPage}) {
  const [vendor, setVendor] = useState({})
  useEffect(() => {
    fetch(`/vendors/${vendorPage}`)
    .then(r => r.json())
    .then(res => {
      if(res.name){
        setVendor(res)
      }else {
        alert(res.errors)
      }
    })
  },[])

  return (
    <div>
      <h2>{vendor.name}</h2>
      Address: {vendor.address}
      Website: {vendor.website}
      Social: {vendor.social}
      Menu: {vendor.menu}
      Services: {vendor.services}
      Phone: {vendor.phone}
      {vendor.img}
      Rating: {vendor.rating}
    </div>
  )
}

export default CompanyPage