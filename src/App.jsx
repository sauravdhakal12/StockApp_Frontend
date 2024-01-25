import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

import AuthPage from "./components/auth/Auth";
import HomePage from "./components/home/Home";
import "../app/globals.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/auth" Component={AuthPage} />
      </Routes>
    </Router>
  )
};

export default App;