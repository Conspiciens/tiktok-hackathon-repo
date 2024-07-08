import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Wishlist from "./Wishlist";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
