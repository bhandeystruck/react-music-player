import React from 'react'
import LibrarySong from './LibrarySong'
import Songs from './Songs'


const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {


    return (
        <div className={`library ${libraryStatus ? 'active-library' : " "}`}>
            <h2>Library</h2>
            {/* Library containing songs the user has*/}
            <div className="library__songs">

                {songs.map(song=><LibrarySong
                     audioRef={audioRef}
                     songs={songs}
                     setCurrentSong={setCurrentSong}
                     song={song}
                     id={song.id}
                     key={songs.id}
                     isPlaying={isPlaying}
                     setSongs={setSongs}
                     />)}

            </div>
            
        </div>
    )
}

export default Library
