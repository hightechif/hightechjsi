import { useEffect, useState } from 'react';
import './App.css';
import Button from './component/Button';
import Display from './component/Display';

function App() {

  const [isGranted, setIsGranted] = useState(false)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [isVisible, setVisibility] = useState(false)

  const accessPermission = () => {
    if (window.jsi !== undefined) {
      setIsGranted(window.jsi?.doAction("location"))
      console.log(`isGranted=${isGranted}`)
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

  const copyLatLong = () => {
    navigator.clipboard.writeText(`${latitude},${longitude}`)
    setVisibility(true)
    setInterval(() => {
      setVisibility(false)
    }, 1200)
  }

  useEffect(() => {
    console.log(window.jsi)
  }, [isGranted, latitude, longitude])

  return (
    <div className="App">
      <header className="App-header">
        <Button label="Permission" onClick={accessPermission} />
        <Button label="Lat Long" onClick={() => { getLatitude(); getLongitude(); }} />
        <Display label="isGranted" value={isGranted} />
        <Display label="latitude" value={latitude} />
        <Display label="longitude" value={longitude} />
        <Button label="copy lat long" onClick={copyLatLong} />
        {isVisible && <p>Copied</p>}
      </header>
    </div>
  );
}

export default App;
