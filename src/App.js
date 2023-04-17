import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => alert("Muncul")} label="Permission" />
        <Button onClick={() => alert("Muncul")} label="Lat Long" />
      </header>
    </div>
  );
}

export default App;
