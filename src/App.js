import Player from "./components/Player";
import Songs from "./components/Songs";
import './styles/app.scss';
import data from "./data";
import {useState, useRef} from "react";
import Library from "./components/Library"
import Nav from "./components/Nav";


function App() {
  //need reference to the audio element
  const audioRef = useRef(null);

  //--------------STATES-----------------//

  //song info state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //State to store the songs, the data() is returned from util.js
  //it returns the songs data from the file
  const[songs,setSongs] = useState(data());

  //need a state to store the current song
  const [currentSong, setCurrentSong] = useState(songs[2]);

  //need a state to handle is playing or pausing functionalities and changes
  const [isPlaying, setIsPlaying] = useState(false);

  const[libraryStatus, setLibraryStatus] = useState(false);

  //------FUNCTION===========//

  //function to handle time of song
  //takes event from audio property of onTimeupdate
  const timeUpdateHandler = (e) =>{
    //variable to store the current time
    const current = e.target.currentTime;
    //the duration of the song
    const duration = e.target.duration;

    //set the state after play and pause
    setSongInfo({...songInfo, currentTime: current, duration:duration});
    console.log(songInfo.currentTime);
  };


  return (
    <div className={`App ${libraryStatus ? "library-active" : " "}`}>
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>

    <Songs currentSong={currentSong}/>

    <Player 
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
      songs={songs}
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      />

    <Library
      audioRef={audioRef}
      songs={songs}
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
      />

    <audio 
      onLoadedMetadata={timeUpdateHandler}
      onTimeUpdate={timeUpdateHandler}
      ref={audioRef}
      src={currentSong.audio}>

    </audio>

  
    
     
    </div>
  );
}

export default App;
