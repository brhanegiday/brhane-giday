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
          content="A freelancer specializing in Web development with 3+ years of experience in software design, development and deployment."
        />
        <meta
          name="keywords"
          content="JavaScript,ReactJs, NextJs, NodeJs, TypeScript, GraphQL, Redux"
        />
        <meta name="author" content="Brhane Giday" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Brhane Giday | Web developer & designer</title>
      </Head>
      <NextSeo
        title="Brhane Giday | Web developer & designer"
        description="A freelancer specializing in Web development with 3+ years of experience in software design, development and deployment."
        openGraph={{
          type: "website",
          url: `${process.env.SELF_URL}/`,
          title: "Brhane Giday | Web developer & designer",
          description:
            "A freelancer specializing in Web development with 3+ years of experience in software design, development and deployment.",
          images: [
            {
              url: `${process.env.SELF_URL}/home/illustration.png`,
              width: 800,
              height: 600,
              alt: "Brhane Giday illustration",
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
