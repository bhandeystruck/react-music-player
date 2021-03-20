import Player from "./components/Player";
import Songs from "./components/Songs";
import './styles/app.scss';
import data from "./util";
import {useState} from "react";


function App() {

  //State to store the songs, the data() is returned from util.js
  //it returns the songs data from the file
  const[songs,setSongs] = useState(data());

  //need a state to store the current song
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
    <h1>Music Player</h1>
    <Songs currentSong={currentSong}/>
    <Player/>
    
     
    </div>
  );
}

export default App;
