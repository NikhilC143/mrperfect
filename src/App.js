import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";


import Home from "./pages/Home";
import Contact from "./pages/contact";

import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                 
                  
                </Routes>
                
                
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
