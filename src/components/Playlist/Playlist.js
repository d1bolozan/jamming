import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
  }
  handleChangeName = ({ target }) => {
    this.props.onNameChange(target.value);
  };
  render() {
    return (
      <div className="Playlist">
        <input value={this.props.playlistName} onChange={this.handleChangeName} placeholder="Enter playlist name"/>
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
