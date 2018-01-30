import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
import Navigation from '../components/navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
