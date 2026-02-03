import { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [count, setCount] = useState(0);
  const tripsList:string[] = ["Rome", "Mediolan", "Honkong"]
  const mealOptions = ["Self-catering", "Breakfast only", "Full board"];

  return (
    <>
      <Header content = "Join us for the trip of your dreams"/>
      <Main listOfTrips={tripsList} mealOptions={mealOptions}/>
    </>
  );
}

export default App;
