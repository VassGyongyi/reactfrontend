import "./App.css";
import DataService from "./model/DataService";
import { useEffect, useState } from "react";
import Tabla from "./view/tabla";
import Urlap from "./view/Urlap";
const DS = new DataService();

function App() {
  let vegpont = "/books";
  const [objLista, setObjLista] = useState([{}]);
  useEffect(() => {
    DS.getAxiosData(vegpont, setObjLista);
    //console.log(vegpont);
    //console.log(objLista);
  }, []);
  function kattintas(id) {
    DS.deleteAxiosData(vegpont, id, (data) => {
      console.log("delete hiba:", data.data, data.status);
    });
  }
  function kuld(urlapAdat) {
    console.log(urlapAdat);
    //itt megkaptam az adatokat és innen küldöm az adatokat az adatbázisba
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React frontend</h1>
      </header>

      <Tabla objLista={objLista} kattintas={kattintas} />
      <Urlap kuld={kuld} />
    </div>
  );
}

export default App;
