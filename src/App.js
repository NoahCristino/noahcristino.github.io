import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Helmet } from "react-helmet";
import { Link, Router } from "components/Router";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Helmet>
        <script
          data-goatcounter="https://noahcristino.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>

        <title>Noah Cristino</title>
      </Helmet>
      <React.Suspense
        fallback={
          <div id="loading">
            <div className="loader"></div>
          </div>
        }
      >
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
