import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "@/components/core/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
