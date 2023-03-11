import "../assets/css/galeria.css";

// Importación useContext y MyContext
import { useContext } from "react";
import MyContext from "../my_context";
///////////////////////////////////////

export default function Favoritos() {
  const {fotos} = useContext(MyContext);
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos.filter((pic) => {
          if (pic.liked === true) {
            return pic;
          }
        }).map((pic, index) => {return(<div key={index} className="foto" style={{backgroundImage: `url(${pic.src.medium})`}}>
          <p>{pic.alt}</p>
        </div>)})
        }
      </div>
    </div>
  );
}
