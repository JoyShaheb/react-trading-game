import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products, ProfitCalculator, SwapProfits } from "./pages";
import Sidebar from "./Components/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profit-calculator" element={<ProfitCalculator />} />
          <Route path="/swap-profits" element={<SwapProfits />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
