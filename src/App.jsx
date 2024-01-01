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
        <Route exact path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
      </Routes>
    </Router>
  )
};

export default App;