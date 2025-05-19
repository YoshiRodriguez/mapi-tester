import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./components/Start";
import PaymentBrickComponent from "./components/PaymentBrickComponent";
import AnotherScreen from "./components/AnotherScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import Dashboard from './components/Dashboard/Dashboard';

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
        <Route path="/" element={<Start />} />
        <Route path="/checkout" element={<PaymentBrickComponent />} />
        <Route path="/another-screen" element={<AnotherScreen />} />{" "}
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Nueva ruta para el Dashboard */}
      </Routes>
    </Router>
  );
};
export default App;
