import React from 'react';
import {fetchEpisodes} from './services/fetchRickMorty';
import EpisodeList from './components/EpisodeList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      userInput: ''
    }
    
  }

  componentDidMount() {
    this.getEpisodes();
  }

  getEpisodes() {
    fetchEpisodes()
      .then(data => {
        this.setState({
          episodes: data.results
        })
      })
  }

  render() {

    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Rick and Morty</h1>
        </header>

        <main className="app__main">
          <EpisodeList 
            episodes={this.state.episodes}
          />
        </main>
        

      </div>
    );
  }
}

export default App;
