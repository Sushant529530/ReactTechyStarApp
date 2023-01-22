
import {
     BrowserRouter as Router,
     Routes,
     Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./style/app.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/mediaQuery.scss"




function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/services" element={<Services/>} />

        </Routes>
        <Footer/>
      </Router>
    
      
    
    </div>
  );
}

export default App;
