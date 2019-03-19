import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'Provider';
import Navbar from 'components/Navbar';
import Search from 'components/Search';
import Map from 'components/Map';

const App = () => (
  <Provider>
    <Navbar />
    <Search />
    <Map />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
