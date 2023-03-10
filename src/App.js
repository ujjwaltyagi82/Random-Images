import React, { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results, setresult] = useState([])
  const Fetchdata = () => {

    fetch(`https://api.unsplash.com/search/photos/?client_id=MVKvg_KM75cFITVcuN4gpIyU1zPbTTZHrp78geXdvik&query=${value}&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        setresult(data.results)
      })
  }

  return (
    <div className="App">
      <div className='box'>
        <span>Search</span>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => Fetchdata()}>Send</button>
      </div>
      <div className='gallery'>
        {
          results.map((item) => {

            return <img className="list" key={item.id} src={item.urls.regular} alt="random" />


          })

        }

      </div>
    </div>
  );
}

export default App;
