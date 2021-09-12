import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={(e) => {
                    this.setState({ query: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={
            moviesFromServer.filter(
              movie => movie.title.toLowerCase().includes(this.state.query.toLowerCase())
              || movie.description.toLowerCase().includes(this.state.query.toLowerCase()),
            )
          }
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
