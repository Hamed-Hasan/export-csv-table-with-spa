import {Routes, Route} from "react-router-dom"
import './App.css';
import Blog from "./Components/Blog/Blog";
import Table from "./Components/Table/Table";
import Navbar from './Shared/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Table/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
