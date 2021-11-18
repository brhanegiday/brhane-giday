import Home from "../src/features/home/Home";
import About from "../src/features/about";
import Works from "../src/features/showCase";

import Layout from "../src/features/layout/Layout";
export default function HomePage() {
  return (
    <div>
      <Layout>
        <Home />
        <About />
        <Works />
      </Layout>
    </div>
  );
}
