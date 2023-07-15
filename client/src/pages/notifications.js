import Notifications from '@/components/core/Notifications'
import React, { useEffect } from 'react'
import { useRouter } from "next/router";

const notifications = () => {
  const router = useRouter();

  
  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      router.push("/login");
    }

  }, []);

  return window.localStorage.getItem("user")?<Notifications/>:<></>;
  
  
}

export default notifications