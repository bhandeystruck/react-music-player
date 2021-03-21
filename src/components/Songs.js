import React from 'react'


const Songs=({currentSong})=> {
    return (
        <div className="song__container">
            <img src={currentSong.cover} alt="songPhoto"></img>
            <h2>{currentSong.name}</h2>
            <h1>{currentSong.artist}</h1>

            
        </div>
    )
}

export default Songs
