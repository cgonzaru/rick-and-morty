import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchEpisodes } from './services/fetchRickMorty';
import EpisodeList from './components/EpisodeList';
import EpisodeDetail from './components/EpisodeDetail';
import Input from './components/Input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      userInput: '',
      userName: ''
    }

    this.getUserInput = this.getUserInput.bind(this);
    this.getUserName = this.getUserName.bind(this);

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

  getUserInput(event) {
    const value = event.currentTarget.value;

    this.setState({
      userInput: value
    })
  }

  getUserName(event) {
    const value = event.currentTarget.value;

    this.setState({
      userName: value
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
                <Fragment>
                  <Input
                    getUserInput={this.getUserInput}
                    getUserName={this.getUserName}
                  />
                  <EpisodeList
                    episodes={this.state.episodes}
                    userInput={this.state.userInput}
                    userName={this.state.userName}
                  />
                </Fragment>
              );
            }}
            />

            <Route path='/detail/:episodeId' render={routerProps => {
              return (
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
