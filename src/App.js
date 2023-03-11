import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// useState, useEffect, Context ////////////
import { useState, useEffect } from "react";
import MyContext from "./my_context";
////////////////////////////////////////////

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";
  
  const [fotos, setFotos] = useState([]);
  const estadoCompartido = {fotos, setFotos};
  
  const fotosApi = async () => {
    const responseFotos = await fetch(endpoint);
    const responseFotosJSON = await responseFotos.json();
    setFotos(responseFotosJSON.photos)
  }

  useEffect(() => {
    fotosApi()
  }, [])

  return (
    <div className="App">
      <MyContext.Provider value={estadoCompartido}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>      
    </div>
  );
}
