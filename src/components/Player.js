import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause,} from "@fortawesome/free-solid-svg-icons";
import {playAudio}  from '../util'



const Player=({currentSong, isPlaying , setIsPlaying, audioRef, setSongInfo, songInfo, songs, setCurrentSong, setSongs})=> {

  
    useEffect(()=>{
        const newSongs = songs.map((song)=>{
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active: true,
                }
            }
            else{
                return{
                    ...song,
                    active:false,
                };
            }
    });
    setSongs(newSongs);
},[currentSong]);




    //---------------FUNCTIONS--------------//

    //need function onClick when play pause skip and reverse
    const playSongHandler = () =>{
        console.log(audioRef);
        //built in play,pause function for audio html elements
        if(isPlaying)
        {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

 
    //need function to display data on slider
   const getTime= (time) => {
    //formatting number in seconds   
    return(
           Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
       );
   };


   //function to handle drag of slider and song duration
   const dragHandler = (e) =>{
       audioRef.current.currentTime = e.target.value;
       setSongInfo({...songInfo, currentTime: e.target.value})

   }

   //function to handle the skip front and back functionality
   //direction parameter decided weather to go aback or forward
   const skipTrackhandler = (direction)=>{
        //we need information about the next song and the prev song while skipping as
        //to which song to skip to
        //get index of current song by comparing the id in the array
        let currentIndex = songs.findIndex((songs)=> songs.id === currentSong.id);
        if(direction === 'skip-front'){
            setCurrentSong(songs[(currentIndex + 1)%songs.length])
        }
        if(direction === 'skip-back')
        {
            if((currentIndex-1)% songs.length ===-1){
                setCurrentSong(songs[songs.length-1]);
                playAudio(isPlaying,audioRef);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1)%songs.length])
        }
        playAudio(isPlaying,audioRef);
   } 



   //--------RETURN--------------//

    return (

        <div className="player">

            <div className="time__control">
                <p>{getTime(songInfo.currentTime)}</p>

                <input
                 min={0}
                 onChange={dragHandler}
                 max={songInfo.duration || 0}
                 value={songInfo.currentTime} 
                 type="range"/>

                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>


            <div className="play__control">
            
                <FontAwesomeIcon className="skip__back" onClick={()=>skipTrackhandler('skip-back')} size="2x" icon={faAngleLeft}/>

                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
           
                <FontAwesomeIcon className="skip__front" size="2x" onClick={()=>skipTrackhandler('skip-front')} icon={faAngleRight}/>

            </div>

            
            
        </div>
    )
}

export default Player
