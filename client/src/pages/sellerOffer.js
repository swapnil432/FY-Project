import React, { useEffect } from 'react'
import SellerOffers from '@/components/core/SellerOffers'
import { useRouter } from "next/router";

const sellerOffer = () => {
  const router = useRouter();

  useEffect(()=>{
    if (!window.localStorage.getItem("user")) {
      router.push("/login");
    }

  },[])
  return typeof window !== "undefined" && window.localStorage.getItem("user")? <SellerOffers />:<></>
}

export default sellerOffer