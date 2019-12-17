import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchEpisodes } from './services/fetchRickMorty';
import EpisodeList from './components/EpisodeList';
import EpisodeDetail from './components/EpisodeDetail';
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

          <Switch>

            <Route exact path='/' render={() => {
              return (
                <EpisodeList
                  episodes={this.state.episodes}
                />
              );
            }}
            />

            <Route path='/detail/:episodeId' render={ routerProps => {
              return(
                <EpisodeDetail 
                  routerProps={routerProps}
                  episodes={this.state.episodes}
                />
              );
            }} 
            />

          </Switch>

        </main>


      </div>
    );
  }
}

export default App;
