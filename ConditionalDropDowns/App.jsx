import "./App.css";
import { DropDown } from "./DropDown.jsx";
import { useState } from "react";

const countries = [
  { name: "India", value: "IND", cities: ["Delhi", "Mumbai"] },
  { name: "Srilanka", value: "SLA", cities: ["Colombo", "Selon"] },
  { name: "Japan", value: "JPN", cities: ["Tokyo", "Kyoto"] },
];

function App() {
  const [selectedRegion,setSelectedRegion] = useState(countries[0].name);
  
  function handleParentDropDownSelect(value){
    setTimeout(()=>{setSelectedRegion(value)},50)
  }
  
  return (
    <div className="App">
      <DropDown countries={countries.map(x=>[x['name'],x['value']]) } parentDropDownSelect={handleParentDropDownSelect} isParent={true}></DropDown>
      <DropDown cities={countries.filter(x=>x['name'] === selectedRegion)[0].cities} isParent={false}></DropDown> 
    </div>
  );
}

export default App;
