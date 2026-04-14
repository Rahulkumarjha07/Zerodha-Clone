import { useEffect } from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

export default function Home() {

  // 🔐 PROTECT ROUTE (SECOND LAYER)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
     window.location.href = "https://zerodha-clone-pi-lovat.vercel.app/login";
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
}