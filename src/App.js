import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Layout from './components/Layout';




function App() {
  return (
    <div>
      <Routes>
      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
    
        </Route >
      
        </Routes>
    </div>
   
  );
}

export default App;
