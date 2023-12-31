// HeadTag component: Heading of each page
// By: Kairos

import React from "react";
import Head from "next/head";
import { appInfo } from "../constants";

const HeadTag = ({ page }) => {
  <Head>
    <title>{`${appInfo.logoText} | ${page}`}</title>
  </Head>;
};

export default HeadTag;
