import React, { useState } from 'react';
// import uuid from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
	const [songs, setSongs] = useState([
		{ title: 'almost home', id: 1 },
		{ title: 'this wild darkness', id: 2 },
		{ title: 'memory gospel', id: 3 },
	]);
	const addSong = (title) => {
		setSongs([...songs, { title, id: 4 }]);
	};
	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => {
					return <li key={song.id}>{song.title}</li>;
				})}
            </ul>
            <NewSongForm addSong={addSong}/>
		</div>
	);
};

export default SongList;
