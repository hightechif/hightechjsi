import { useEffect, useState } from 'react';
import './App.css';
import Button from './component/Button';

function App() {

  const [isGranted, setIsGranted] = useState(false)
  const [data, setData] = useState([])
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const accessPermission = () => {
    if (window.jsi !== undefined) {
      setIsGranted(window.jsi?.doAction("location"))
      console.log(`isGranted=${isGranted}`)
    }
  }

  const getLatLong = () => {
    if (window.jsi !== undefined) {
      setData(window.jsi?.getLatLongData())
      console.log(window.jsi)
      console.log(`data=${data}`)
    }
  }

  const getLatitude = () => {
    if (window.jsi !== undefined) {
      setLatitude(window.jsi?.getLatitude())
      console.log(`latitude=${latitude}`)
    }
  }

  const getLongitude = () => {
    if (window.jsi !== undefined) {
      setLongitude(window.jsi?.getLongitude())
      console.log(`longitude=${longitude}`)
    }
  }

  useEffect(() => {
    console.log(window.jsi)
  }, [isGranted, data, latitude, longitude])

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={accessPermission} label="Permission" />
        <Button onClick={() => { getLatLong(); getLatitude(); getLongitude(); } } label="Lat Long" />
        <p>isGranted: {isGranted}</p>
        <p>data: {data}</p>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
      </header>
    </div>
  );
}

export default App;
