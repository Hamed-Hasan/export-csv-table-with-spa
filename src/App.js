import {Routes, Route} from "react-router-dom"
import './App.css';
import Blog from "./Components/Blog/Blog";
import Table from "./Components/Table/Table";
import Contact from "./Contact/Contact";
import Navbar from './Shared/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Table/>} />
        <Route path="/table" element={<Table/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
