// HeadTag component: Heading of each page
// By: Kairos

import React from "react";
import Head from "next/head";
import appInfo from "../constants";

const HeadTag = ({ page }) => {
  <Head>
    <title>{`${appInfo.logoText} | ${page}`}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="title" content={userinfo.logoText} />
    <meta name="description" content={userinfo.content} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={userinfo.logoText} />
    <meta property="og:description" content={userinfo.content} />
    <meta property="og:image" content="" />
  </Head>;
};

export default HeadTag;