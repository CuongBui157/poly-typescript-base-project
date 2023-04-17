import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { UseLayout } from "./components/layout/useLayout";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
