import React, { useEffect, useState } from "react";
import Country from "./Country";
import "./App.css";
const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data:" + err));
  }, []);
  console.log(countries);
  return (
    <div className="container">
      {countries.map((country) => (
        <Country key={country.abbr} name={country.name} flag={country.flag} />
      ))}
    </div>
  );
};

export default App;
