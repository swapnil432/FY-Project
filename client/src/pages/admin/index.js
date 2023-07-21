import AdminNavbar from "@/Admin/components/AdminNavbar";
import { useEffect } from "react";
import { useRouter } from "next/router";

const dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if(!window.localStorage.getItem("token")){
      router.push("/admin/login")
    }

  }, [])
  return typeof window !== "undefined" && window.localStorage.getItem("token") ? <AdminNavbar /> : null;
};

export default dashboard;

