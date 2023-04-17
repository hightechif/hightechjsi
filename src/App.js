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
    }
  }

  const getLatLong = () => {
    if (window.jsi !== undefined) {
      setData(window.jsi?.getLatLongData())
      console.log(`latitude=${data[0]}`)
      console.log(`longitude=${data[1]}`)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={accessPermission} label="Permission" />
        <Button onClick={getLatLong} label="Lat Long" />
        <p>isGranted: ${isGranted}</p>
        <p>latitude: ${data[0]}</p>
        <p>longitude: ${data[1]}</p>
      </header>
    </div>
  );
}

export default App;
