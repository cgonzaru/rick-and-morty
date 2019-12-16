import React from 'react';
import {fetchEpisodes} from './services/fetchRickMorty';
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
    console.log(this.state.episodes)
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Rick and Morty</h1>
        </header>

        <main className="app__main">
          <ul className="episodes-list">
            {this.state.episodes
              .map(item => {
                return (
                  <li className="episode" key={item.id}>{item.name}</li>
                );
              })
            
            }
          </ul>
        </main>
        

      </div>
    );
  }
}

export default App;
