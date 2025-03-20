import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import NewHome from "./components/NewHome";
import Home from "./components/home";
import ModernPortfolio from "./components/ModernPortfolio";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<ModernPortfolio />} />
          <Route path="/choose" element={<NewHome />} />
          <Route path="/classic" element={<Home />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
