import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import UpperBanner from "../../components/UpperBanner";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

import { getParsedYAML } from "../../services/parser";
import PodcastsCard from "../../components/PodcastsCard";

export default function Communities({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Communities - Awesome Morocco UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/site-icon.svg" />
      </Head>

      <div className={styles.main}>
        <UpperBanner />
        <Navbar currentPageTitle={false} />
        <Header
          headerTitle={"Communities"}
          haederDescription={
            "Check out the best developers at your domain and book a session of mentoring How does it work?"
          }
        />
        <PodcastsCard podcasts={data} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await getParsedYAML("podcasts.yaml");
  return {
    props: { data },
  };
};
