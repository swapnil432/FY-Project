import SinglePropetyPage from "@/components/core/SinglePropetyPage";
import UserDetail from "@/components/core/UserDetails";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const propertydetail = () => {
  const [propId, setpropId] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!window.localStorage.getItem("user")) {
      router.push("/login");
    }

    const { propertyID } = router.query;
    setpropId(propertyID);
  }, []);

  return <>{propId && <SinglePropetyPage propertyID={propId} />}</>;
};
export default propertydetail;
