import WatchboxTable from "./components/WatchboxTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Tanmay's Watchbox</h1>
        <p>My personal collection of movies, series, and songs</p>
      </header>
      <WatchboxTable />
    </div>
  );
}

export default App;
