import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";



const Player=({currentSong, isPlaying , setIsPlaying})=> {

    //song info state
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null,
    });
    
    //need reference to the audio element
    const audioRef = useRef(null);

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
        <div className="player">

            <div className="time__control">
                <p>{songInfo.currentTime}</p>
                <input type="range"/>
                <p></p>
            </div>

            <div className="play__control">
            
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft}/>

                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
           
                <FontAwesomeIcon className="skip__front" size="2x" icon={faAngleRight}/>

            </div>
            <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
            
        </div>
    )
}

export default Player
