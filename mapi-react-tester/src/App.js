import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PaymentBrickComponent from "./components/PaymentBrickComponent";
import AnotherScreen from "./components/AnotherScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";

// function App() {
//   return (
//     <div className="App">
//       <PaymentBrickComponent />
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/checkout" element={<PaymentBrickComponent />} />
        <Route path="/another-screen" element={<AnotherScreen />} />{" "}
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      </Routes>
    </Router>
  );
};
export default App;
