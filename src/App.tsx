import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./Header";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
