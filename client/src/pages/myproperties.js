import Myproperties from '@/components/core/Myproperties'
import React, { useEffect } from 'react'
import { useRouter } from "next/router";

const myproperties = () => {
  const router = useRouter();

  
  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      router.push("/login");
    }

  }, []);

  return typeof window !== "undefined" && window.localStorage.getItem("user")? (
    <div>
        <Myproperties/>
    </div>
  ):<></>
}

export default myproperties