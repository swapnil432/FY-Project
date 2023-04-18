import UserDetail from "@/components/core/UserDetails";
import React from "react";
import { Context } from "@/Context";
import { useContext, useEffect } from "react";

const userinfo = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(()=>{
    if(state?.user){
      console.log("from prop info "+ state.user.is_verified)
    }
  },[state])

  return <UserDetail />;
};

export default userinfo;

