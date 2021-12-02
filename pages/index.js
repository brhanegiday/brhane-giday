import Head from "next/head";
import Home from "../src/features/home/Home";
import About from "../src/features/about";
import Works from "../src/features/showCase";
import ContactMe from "../src/features/contact";

import Layout from "../src/features/layout/Layout";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="A freelance software engineer specialized in both front-end and back-end web development."
        />
        <meta
          name="keywords"
          content="JavaScript,ReactJs, NextJs, NodeJs, TypeScript, GraphQL, Redux"
        />
        <meta name="author" content="Brhane Giday" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Brhane Giday | Fullstack Web Developer</title>
      </Head>
      <Layout>
        <Home />
        <About />
        <Works />
        <ContactMe />
      </Layout>
    </React.Fragment>
  );
}
