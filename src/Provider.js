/* eslint-disable react/no-unused-state */
import React from 'react';
import withContextFactory from './lib/withContextFactory';
import landsList from './static/lands';

const Context = React.createContext({});

export const withContext = withContextFactory(Context);

export default class Provider extends React.Component {
  state = {
    land: '',
    landsList: Object.values(landsList),
    setLand: this.setLand.bind(this)
  };

  setLand(land) {
    this.setState({ land });
  }

  render = () => {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}
