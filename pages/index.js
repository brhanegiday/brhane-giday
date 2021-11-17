import Home from "../src/features/home/Home";
import About from "../src/features/about";

import Layout from "../src/features/layout/Layout";
export default function HomePage() {
  return (
    <div>
      <Layout>
        <Home />
        <About />
      </Layout>
    </div>
  );
}
