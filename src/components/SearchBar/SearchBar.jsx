import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };

    this.search = this.search.bind(this);
  }

  search = (term) => {
    this.props.onSearch(term);
  };

  handleTermChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
