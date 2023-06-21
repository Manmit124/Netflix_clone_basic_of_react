import {BrowserRouter as Router, Route,Routes, Form} from "react-router-dom";
import './App.scss';
import Home from "./Home/Home";
import Header from "./components/Header";


function App() {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
