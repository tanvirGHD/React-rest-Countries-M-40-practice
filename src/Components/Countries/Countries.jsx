import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {

    const [countries, setCountries]= useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])



    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    // Visited 
    const handleVisitedCountry = country => {
      console.log('add to visited country');
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }

    // flags
    const handleVisitedFlags = flag => {
      const newVisitedFlags = [...visitedFlags,flag]
      setVisitedFlags(newVisitedFlags);
    }


    //remove item from an array in a state 
    //use filter to select all the elements except the on you want to remove.



  return (
    <div>
        <h3>Countries: {countries.length} </h3>
        {/* Visited Countries */}
        <div>
          <h4>Visited Country list: {visitedCountries.length} </h4>
          <ul>
          {
            visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li> )
          }
          </ul> 
        </div>


        {/* display Flags */}
        <div className="flag-container">
          {
            visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
          }

        </div>


        {/* Display Countries */}
        <div className="country-container">
        {
          countries.map(country => <Country 
          key={country.cca3} 
          handleVisitedCountry={handleVisitedCountry} 
          handleVisitedFlags={handleVisitedFlags}
          data={country}></Country>)
        }
        </div>
    </div>
  )
}
