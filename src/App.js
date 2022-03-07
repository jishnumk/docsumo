import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/login-page.page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/home" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
