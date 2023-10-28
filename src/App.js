import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import ViewTable from "./components/ViewTable";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/view" element={<ViewTable />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;