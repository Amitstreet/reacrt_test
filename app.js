
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading_4 = <h1>namste</h1>;// this is jsx ite reudc so  much mess for react.create_element
// React component
// functional-NEW [used most of the times]
// class based component-OLD


const Title = () => (
    <a href="/">
        <img
            className='logo'
            alt="logo"
            src="data:image/png;base64,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"

        />

    </a>
);




// there is many way to call function component under function componennt <Title/> {Title()} 
const HeaderComponent = () => {
    return (<div className='header'>

        <Title />
        <div className='Nav-items'>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>cart</li>
            </ul>
        </div>

    </div>)
};



const burgerking= {

    name:"burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/svw4kqsiouz4vzslymva",
    cusines:["burger","american"],
    rating:"4.2"
 }



 



 



const rest_data =     [ 
    
    { "type": "restaurant",
    "data": {
      "type": "F",
      "id": "718767",
      "name": "Yadav Coffee Corner",
      "uuid": "6a4ea62d-7907-4d9c-86e8-10165602cfcc",
      "city": "10650",
      "area": "Khalilabad",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "5b17fc2fe703cfaa5478f2994fdf2e1d",
      "cuisines": [
        "Beverages",
        "Sweets"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 3.799999952316284,
      "slugs": {
        "restaurant": "yadav-coffee-corner-khalilabad-khalilabad",
        "city": "khalilabad"
      },
      "cityState": "10650",
      "address": "BANK CHAURAHA NEAR STATE BANK KHALILABAD UTTAR PRADESH 272175",
      "locality": "Bank Chauraha",
      "parentId": 428513,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "718767",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "603635",
      "name": "Sonchiriya food cout",
      "uuid": "31379f91-7f08-4f19-befd-1acb0e223395",
      "city": "10650",
      "area": "Khalilabad",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "wmdjrxtadzsg58uandrt",
      "cuisines": [
        "Chinese",
        "Indian",
        "Burgers",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4.300000190734863,
      "slugs": {
        "restaurant": "sonchiriya-food-cout-khalilabad-khalilabad",
        "city": "khalilabad"
      },
      "cityState": "10650",
      "address": "Teacher's Colony, Khalilabad, khalilabad (NPP), Khalilabad Tahsil, Sant Kabir nagar, Uttar Pradesh 272175",
      "locality": "Teacher's Colony",
      "parentId": 359891,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "603635",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "515448",
      "name": "Indu litti chokha",
      "uuid": "481de96c-8372-4be9-b6d6-889177883dd9",
      "city": "10650",
      "area": "Khalilabad Locality",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "evtc3t9wmif45rj9v52z",
      "cuisines": [
        "North Indian",
        "Bihari",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "ravikant-pandey-s/o-shardanad-pandey-khalilabad-khalilabad",
        "city": "khalilabad"
      },
      "cityState": "10650",
      "address": "Indo Litti Chokha & Restorent  near Bajaj Agency saria baipass khalilabad - 272175",
      "locality": "Teacher's Colony",
      "parentId": 336810,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "515448",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "588782",
      "name": "Ajamghad Kalika Hotel",
      "uuid": "b8befe1c-dcc0-46af-9ef1-5500ae1f78e0",
      "city": "10650",
      "area": "Khalilabad",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "yk6xxd6o9dp5affpatl6",
      "cuisines": [
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "ajamghad-kalika-hotel-khalilabad-khalilabad",
        "city": "khalilabad"
      },
      "cityState": "10650",
      "address": "Kabir Park PO/PS KHALIABAD UTTAR PRADESH",
      "locality": "Teacher's Colony",
      "parentId": 352260,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": false,
        "nextOpenMessage": "Opens next at 9:30 pm, today",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "588782",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "500998",
      "name": "Second Wife Cafe and Food Plaza",
      "uuid": "3d6ffe20-147d-45fe-b88f-eaddef2b2278",
      "city": "10650",
      "area": "Khalilabad Locality",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "beuq2phdilsbychbujg0",
      "cuisines": [
        "Indian",
        "North Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4.900000095367432,
      "slugs": {
        "restaurant": "m/s-second-wife-cafe-and-food-plaza-khalilabad-khalilabad",
        "city": "khalilabad"
      },
      "cityState": "10650",
      "address": "Saraiya Bypass , khalilabad -272175",
      "locality": "",
      "parentId": 329190,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": false,
        "nextOpenMessage": "Opens next at 6 pm, Friday",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "500998",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "500195",
      "name": "Madhukunj sweets",
      "uuid": "f405ef99-b1c8-4c2b-9932-b964dd26c4cd",
      "city": "10650",
      "area": "Khalilabad",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "jz4dakaloomvrb6f8e4f",
      "cuisines": [
        "Sweets",
        "Chinese",
        "Snacks",
        "South Indian",
        "Fast Food",
        "Chaat",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "m/s-madhukunj-sweets-khalilabad-khalilabad",
        "city": "khalilabad"
      },
      "cityState": "10650",
      "address": "Mehdawal Chauraha khalilabad -272175",
      "locality": "Teacher's Colony",
      "parentId": 299943,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": false,
        "nextOpenMessage": "Opens next at 11 am, tomorrow",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "500195",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },]






  const Resturantcard = ({name,cloudinaryImageId,cuisines}) =>{
  
    return (

     <div className='card'>
        <img  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>  
         <h4></h4>    
     </div>

    )
 }









const Body = () => {
    return (
        <div className='restorent_card'>
       
        {rest_data.map((ele,idx) => (
                <Resturantcard   id={idx} {...ele.data} />

      ))}
        </div>
    )
}





const Footer = () => {
    return (
        <h1>footer</h1>
    )
}



const AppLayout = () => {

    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>

    )
}


// when we go multiple html then we need use () bracket for wrap html
// funnctional component words statrt with captail

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />); 


