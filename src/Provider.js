import React from 'react';
import withContextFactory from 'lib/withContextFactory';

const Context = React.createContext({});

export const withContext = withContextFactory(Context);

export default class Provider extends React.Component {
  state = {
    countryName: null,
    setCountryName: this.setCountryName.bind(this),
  }

  setCountryName(countryName) {
    this.setState({ countryName });
  };

  render = () => (
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  );
}
