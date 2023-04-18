import UserDetail from "@/components/core/UserDetails";
import React from "react";
import { Context } from "@/Context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const userinfo = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  
  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      router.push("/login");
    }
  }, [state]);

  return <UserDetail />;
};

export default userinfo;
