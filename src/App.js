import "./App.css";
import Layout from "./components/Layout";
import CaseStudies from "./containers/CaseStudies/CaseStudies";
import Brands from "./containers/Brands/Brands";
import WhatWeDo from "./containers/WhatWeDo/WhatWeDo";
import Banner from "./containers/Banner/Banner";

function App() {
  return (
    <Layout className="App">
     <Banner/>
      <WhatWeDo />
      <CaseStudies />
      <Brands />
    </Layout>
  );
}

export default App;
