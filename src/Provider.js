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
    pose: 'start',
    setLand: this.setLand.bind(this),
    setPose: this.setPose.bind(this)
  };

  setLand(land) {
    this.setState({ land });
  }

  setPose(pose) {
    this.setState({ pose });
  }

  render = () => {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}
