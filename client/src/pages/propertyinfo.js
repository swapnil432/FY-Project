import { Context } from "@/Context";
import { useContext, useEffect } from "react";
import PropertyDetails from "@/components/core/PropertyInfo";
import { useRouter } from "next/router";

const propertyinfo = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  useEffect(()=>{
    if (!window.localStorage.getItem("user")) {
      router.push("/login");
    }

  },[state])

  return window.localStorage.getItem("user")?<PropertyDetails />:<></>;
};

export default propertyinfo;
