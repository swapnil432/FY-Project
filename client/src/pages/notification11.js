import NotificationCard from '@/components/common/NotificationCard'
import React from 'react'

const notification = () => {
  return (
    <div>
        <NotificationCard type="offer" status="success"/>
    </div>
  )
}

export default notification



// userNotifications = [{
//     viewed:"true/false",
//     type:"offer/propertyDoc/UserDoc,
//     status:"reject/accepted",

//     metaData:{
//        propID: "" 
//     }
// }]