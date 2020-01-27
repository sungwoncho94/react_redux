import React, { Component } from 'react';

import './App.css';
// import Counter from './components/Counter';
// import Palette from './components/Palette';
import PaletteContainer from './containers/PaletteContainer'
// import WaitingList from './components/WaitingList';
// Counter -> CounterContainer로 바꾸면 저절로 불러와짐 ㄷㄷㄷㄷ
import CounterContainer from './containers/CounterContainer';
import WaitingListContainer from './containers/WaitingListContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
