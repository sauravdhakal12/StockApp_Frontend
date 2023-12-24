import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

import LoginPage from "./components/auth/Login";
import SignupPage from "./components/auth/SignUp";
import HomePage from "./components/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
};

export default App;