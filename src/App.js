import { useEffect, useState } from 'react';
import './App.css';
import getISSPosition from "./adapters/getISSPosition.js";
import getCosmonautsInSpace from "./adapters/getCosmonautsInSpace.js";
import CoordinatesISS from "./components/CoordinatesISS";
import DateTime from "./components/DateTime";
import Map from "./components/Map";
import CosmonautsList from "./components/CosmonautsList";

function App() {
  const [ISSPositionObj, setISSPositionObj] = useState({ longitude: 0, latitude: 0 });
  const [cosmonautsList, setCosmonautsList] = useState([]);
  const [time, setTime] = useState(new Date(new Date().toUTCString().slice(0, -4)).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }))

  const [date, setDate] = useState(new Date(new Date().toUTCString().slice(0, -4)).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }))

  useEffect(() => {
    getISSPosition()
      .then(response => response.json())
      .then(issPosition => setISSPositionObj(issPosition["iss_position"]))

    getCosmonautsInSpace()
      .then(response => response.json())
      .then(cosmonautsInSpace => setCosmonautsList(cosmonautsInSpace.people.filter((cosmonaut) => cosmonaut.craft == "ISS")))

    setInterval(() => {
      getISSPosition()
        .then(response => response.json())
        .then(issPosition => setISSPositionObj(issPosition["iss_position"]))

      getCosmonautsInSpace()
        .then(response => response.json())
        .then(cosmonautsInSpace => setCosmonautsList(cosmonautsInSpace.people.filter((cosmonaut) => cosmonaut.craft == "ISS")))

      setTime(new Date(new Date().toUTCString().slice(0, -4)).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }))

      setDate(new Date(new Date().toUTCString().slice(0, -4)).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      }))
    }, 5000);
  }, [])

  return (
    <div className="App">
      <CoordinatesISS ISSPositionObj={ISSPositionObj} />
      <DateTime time={time} date={date} />
      <Map ISSPositionObj={ISSPositionObj} />
      <CosmonautsList cosmonauts={cosmonautsList} />
    </div>
  );
}

export default App;