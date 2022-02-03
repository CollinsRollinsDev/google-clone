/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import React, { useState, useLayoutEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routes from "../components/Routes";
import { useStateContext } from "../contexts/StateContextProvider";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(false);

  const { getResults, results, searchTerm, setSearchTerm, loading } =
    useStateContext();

  useLayoutEffect(() => {
    router.push("/search");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rollins Search</title>
        <meta name="description" content="Search Engine by Collins Rollins" />
        <link rel="icon" href="/mypic.jpeg" />
      </Head>

      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}
