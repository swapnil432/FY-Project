import { Context } from "@/Context";
import { useContext, useEffect } from "react";
import PropertyDetails from "@/components/core/PropertyInfo";

const propertyinfo = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(()=>{
    if(state?.user){
      console.log("from prop info "+ state.user.is_verified)
    }
  },[state])

  return <PropertyDetails />;
};

export default propertyinfo;
