import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import Playlist from "../Playlist/Playlist";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
      ],
      playlistName: "My playlist",
      playlistTracks: [
        { name: "playlistName1", artist: "playlistArtist1", album: "playlistAlbum1", id: 4 },
        { name: "playlistName2", artist: "playlistArtist2", album: "playlistAlbum2", id: 5 },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack = (track) => {
    if (this.state.playlistTracks.find((tracks) => tracks.id === track.id)) {
      return;
    }
    this.setState((prevState) => ({
      playlistTracks: [track, ...prevState.playlistTracks],
    }));
  };

  removeTrack = (track) => {
    this.setState((prevState) => ({
      playlistTracks: prevState.playlistTracks.filter((prevTrack) => prevTrack.id !== track.id),
    }));
  };

  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  };

  search = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResult onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
