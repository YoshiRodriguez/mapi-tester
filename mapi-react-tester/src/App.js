import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Cambié Switch por Routes
import './App.css';  // Estilos globales
import Login from './components/Login';
import PaymentBrickComponent from './components/PaymentBrickComponent';

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
      </Routes>
    </Router>
  );
};
export default App;
