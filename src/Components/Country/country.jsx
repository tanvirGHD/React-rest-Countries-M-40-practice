import { useState } from 'react';
import './country.css'
const Country = ({data,handleVisitedCountry,handleVisitedFlags}) => {


  const {name, flags,population,area,cca3}= data;


  const [visited,setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited)
  }



  return (
    // {`country ${visited ? 'css style add' : 'onno r akta css style ditam'}`}
    <div className={`country ${visited && 'visited'}`}>
      <h3>Name: {name.common}</h3>
      <img className='img' src={flags.png}></img>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small> </p>

      <button onClick={() => handleVisitedCountry(data)}>Mark Visited</button>

      <button onClick={() => handleVisitedFlags(data.flags.png)}>Add Flag</button>

      <button style={{backgroundColor: visited ? 'purple': 'white'}} onClick={handleVisited}>{visited ? 'Visited': 'Go Visit'}</button>

      {visited ? ' I have visited this country.' : 'Not Visited'}
    </div>
  );
};

export default Country;
