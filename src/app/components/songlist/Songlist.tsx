"use client";

import { useState } from "react";

interface Song {
  songName: string;
  id: number;
}

export default function SongList() {
  // Adding React State
  const [songName, setSongName] = useState<Song[]>([
    { songName: "Pasoori", id: 1 },
    { songName: "Aayi Aayi", id: 2 },
  ]);

  // Input State to Get input data
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  // functions to make song app working
  const addSongName = () => {
    const songObj = songName.find((song) => song.id === id);
    console.log("Song Name", songObj);
    if (songObj) {
      const updatedSongList = songName.filter((song) => song.id !== id);
      setSongName([...updatedSongList, { songName: input, id: id }]);
      setInput("");
      setId(0);
      return;
    }
    setSongName([...songName, { songName: input, id: id }]);
    setInput("");
    setId(0);
  };

  const editSongName = (id: number) => {
    // TODO: Implement Edit Song Name functionality
    const songObj = songName.find((song) => song.id === id);
    if (songObj) {
      setInput(songObj.songName);
      setId(songObj.id);
    }
  };

  const deleteSongName = (id: number) => {
    const delSongList = songName.filter((song) => song.id !== id);
    setSongName([...delSongList]);
  };

  return (
    <div className="max-w-4xl bg-slate-200 mx-auto p-5">
      <h1 className="text-xl text-center">Simple Song List App</h1>

      {/* Input and Button Div */}
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 w-[70%] ml-3 text-lg border-b focus:outline-none"
          placeholder="Enter a song name"
        />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          className="p-2 w-[30%] ml-3 text-lg border-b focus:outline-none"
          placeholder="Enter an ID"
        />
        <button
          onClick={addSongName}
          className="bg-blue-400  hover:bg-blue-500 w-[20%] text-white rounded"
        >
          Add a Song
        </button>
      </div>
      {/* End of Input and Button Div */}

      {/* Song List View Section*/}
      <div className="mt-4">
        {/* Grid Items */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Song Item */}
          {songName.map((song, index) => (
            <div key={index} className="bg-white shadow p-4">
              <div className="flex justify-between">
                <span className="shadow rounded-full w-8 h-8 bg-cyan-400 text-center py-1">
                  {index + 1}
                </span>
                <span
                  onClick={() => deleteSongName(song.id)}
                  className="shadow rounded-full w-8 h-8 bg-cyan-400 text-center py-1 cursor-pointer"
                >
                  X
                </span>
              </div>
              <div className="mt-4 text-[30px] text-gray-700">
                {/* Song Names */}
                {song.songName}
              </div>
              <div>
                <h2 className="text-right">
                  <span
                    className="cursor-pointer px-2 py-1 hover: bg-gray-100 rounded"
                    onClick={() => editSongName(song.id)}
                  >
                    Edit
                  </span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
