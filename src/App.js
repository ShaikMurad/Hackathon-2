import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Equipment from "./Pages/Equipment";
import Driller from "./Components/Driller";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Pop from "./Components/Pop";
import Cart from "./Pages/Cart";
import { UserProvider } from "./UserContext";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/equipment" element={<Equipment />}>
            <Route index element={<Driller />} />
            <Route path="driller/:id" element={<Pop />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
