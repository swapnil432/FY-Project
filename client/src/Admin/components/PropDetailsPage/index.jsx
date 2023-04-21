import AdminPropertyDetails from '@/components/core/AdminPropertyDetails';
import React, { useState, useEffect } from 'react';

const PropDetailsPage = ({propertyID,showProperty,setShowProperty}) => {
  return (
    <div>
      <AdminPropertyDetails propertyID={propertyID} showProperty={showProperty} setShowProperty={setShowProperty}/>
      </div>
  )
}

export default PropDetailsPage