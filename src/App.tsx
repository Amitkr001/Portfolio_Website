import ModernPortfolio from "./components/ModernPortfolio";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <ModernPortfolio />
      <Analytics />
    </>
  );
}

export default App;
