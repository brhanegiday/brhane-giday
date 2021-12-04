import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
// Dynamic import
const Home = dynamic(() => import("../src/features/home/Home"));
const About = dynamic(() => import("../src/features/about"));
const Works = dynamic(() => import("../src/features/showCase"));
const ContactMe = dynamic(() => import("../src/features/contact"));
const Layout = dynamic(() => import("../src/features/layout/Layout"));

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
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
        <title>Brhane Giday | Fullstack Developer</title>
      </Head>
      <NextSeo
        title="Brhane Giday | Fullstack Developer"
        description="A freelance software engineer specialized in both front-end and back-end web development."
        openGraph={{
          type: "website",
          url: `${process.env.SELF_URL}/`,
          title: "Brhane Giday | Fullstack Developer",
          description:
            "A freelance software engineer specialized in both front-end and back-end web development.",
          images: [
            {
              url: `${process.env.SELF_URL}/og/Brhane-Giday.png`,
              width: 800,
              height: 600,
              alt: "Brhane Giday",
            },
          ],
        }}
      />
      <Layout>
        <Home />
        <About />
        <Works />
        <ContactMe />
      </Layout>
    </React.Fragment>
  );
}
