import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
