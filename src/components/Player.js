import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause,} from "@fortawesome/free-solid-svg-icons";



const Player=({currentSong, isPlaying , setIsPlaying, audioRef, setSongInfo, songInfo})=> {

  

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

                <p>{getTime(songInfo.duration)}</p>
            </div>


            <div className="play__control">
            
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft}/>

                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
           
                <FontAwesomeIcon className="skip__front" size="2x" icon={faAngleRight}/>

            </div>

            
            
        </div>
    )
}

export default Player
