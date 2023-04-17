import './App.css';
import Button from './component/Button';

function App() {

  const accessPermission = () => {
    if (window.jsi !== undefined) {
      const isGranted = window.jsi?.doAction("location")
      alert(`isGranted=${isGranted}`)
      return isGranted
    }
  }

  const getLatLong = () => {
    if (window.jsi !== undefined) {
      const data = window.jsi?.doAction("location")
      alert(`data=${data}`)
      return data
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={accessPermission} label="Permission" />
        <Button onClick={getLatLong} label="Lat Long" />
      </header>
    </div>
  );
}

export default App;
