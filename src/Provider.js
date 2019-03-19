/* eslint-disable react/no-unused-state */
import React from 'react';
import withContextFactory from './lib/withContextFactory';

const Context = React.createContext({});

export const withContext = withContextFactory(Context);

export default class Provider extends React.Component {
  state = {
    countryName: null,
    setCountryName: this.setCountryName.bind(this)
  };

  setCountryName(countryName) {
    this.setState({ countryName });
  }

  render = () => {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}
