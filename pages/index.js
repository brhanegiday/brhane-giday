import Head from "next/head";
import Home from "../src/features/home/Home";
import About from "../src/features/about";
import Works from "../src/features/showCase";
import ContactMe from "../src/features/contact";

import Layout from "../src/features/layout/Layout";
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Brhane Giday | Fullstack Web Developer</title>
      </Head>
      <Layout>
        <Home />
        <About />
        <Works />
        <ContactMe />
      </Layout>
    </div>
  );
}
