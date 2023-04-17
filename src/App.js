import { useState } from 'react';
import './App.css';
import Button from './component/Button';

function App() {

  const [isGranted, setIsGranted] = useState(false)
  const [data, setData] = useState([])

  const accessPermission = () => {
    if (window.jsi !== undefined) {
      setIsGranted(window.jsi?.doAction("location"))
      console.log(`isGranted=${isGranted}`)
      return isGranted
    }
  }

  const getLatLong = () => {
    if (window.jsi !== undefined) {
      setData(window.jsi?.getLatLongData())
      console.log(`data=${data}`)
      return data
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={accessPermission} label="Permission" />
        <Button onClick={getLatLong} label="Lat Long" />
      </header>
      <body>
        <p>isGranted: ${isGranted}</p>
        <p>latLng: ${data}</p>
      </body>
    </div>
  );
}

export default App;
