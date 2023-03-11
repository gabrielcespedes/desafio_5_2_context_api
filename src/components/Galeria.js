import "../assets/css/galeria.css";
import Heart from "./Heart";

// Importación useContext y MyContext
import { useContext } from "react";
import MyContext from "../my_context";
///////////////////////////////////////

export default function Home() {
  const {fotos, setFotos} = useContext(MyContext);

  const Heart_Click = (id) => {    
    const pic_id = fotos.findIndex((pic) => pic.id === id);
    fotos[pic_id].liked = !fotos[pic_id].liked;
    setFotos([...fotos]);    
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map(pic => (        
          <div key={pic.id} className='foto' style={{backgroundImage:`url(${pic.src.medium})`}}>
            <Heart filled={(pic.liked)} onClick={() => Heart_Click(pic.id)}></Heart>
            <p>{pic.alt}</p>                  
          </div>) 
      )
      }
    </div>
  );
}
