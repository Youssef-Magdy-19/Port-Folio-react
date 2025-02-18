import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import Projects from "./Components/projects";
import Skills from "./Components/Skills";
import Form from "./Components/Form"
import Footer from "./Components/Footer";
import Subscribe from "./Components/Subscribe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
        <div>
          <BrowserRouter>
            <Header /> 
            
            <Routes>
              <Route  path="/home"  element={<Home />}/>
              <Route  path="/skills"  element={<Skills />}/>
              <Route  path="/projects"  element={<Projects />}/>
              <Route  path="/form"  element={<Form />}/>
              <Route  path="/footer"  element={<Footer />}/>
            </Routes>
            <div className="homePage">
            
              <Home />
            </div>
            
            <Skills/>
            <Projects/>
            <div className="fsf">
              <Form/>
              <Subscribe/>
              <Footer/>
            </div>
          </BrowserRouter>


          
        </div>
  );
}

export default App;
