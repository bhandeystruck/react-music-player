import Player from "./components/Player";
import Songs from "./components/Songs";
import './styles/app.scss';

function App() {
  return (
    <div className="App">
    <h1>Music Player</h1>
    <Songs/>
    <Player/>
     
    </div>
  );
}

export default App;
