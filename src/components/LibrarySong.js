import React from 'react'
import Songs from './Songs'
import {playAudio} from '../util'

const LibrarySong = ({song, setCurrentSong, songs, key , id, audioRef, isPlaying, setSongs}) => {

    //function that handles the changing of songs when clicked in the library component
    const songSelectHandler = async () =>{
        await setCurrentSong(song);
        //add active state to songs in the library
        const newSongs = songs.map((song)=>{
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                }
            }
            else{
                return{
                    ...song,
                    active:false,
                }
            }
        });
        setSongs(newSongs)
        audioRef.current.play();
        //check if is playing
        playAudio(isPlaying,audioRef);
       
    };

    return (
        <div onClick={songSelectHandler} className={`library__song ${song.active ? 'selected' : " "}`}>

            <img alt={song.name} src={song.cover}></img>
            <div className="song__description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        
            
        </div>
    )
}

export default LibrarySong;
