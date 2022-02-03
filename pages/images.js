import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routes from "../components/Routes";
import Result from "../components/Result";
import { useStateContext } from "../contexts/StateContextProvider";

export default function Images() {
  const [darkTheme, setDarkTheme] = useState(false);

  const { getResults, results, searchTerm, setSearchTerm, loading } =
    useStateContext();

  return (
    <div className={styles.container}>
      <Head>
      <title>Rollins Search</title>
        <meta name="description" content="Search Engine by Collins Rollins" />
        <link rel="icon" href="/mypic.jpeg" />
      </Head>

      <Navbar searchTerm={searchTerm} />
      <Routes />
      <Result
        loading={loading}
        currentPath="images"
        results={results}
        getResults={getResults}
        searchTerm={searchTerm}
      />
      <Footer />
    </div>
  );
}
