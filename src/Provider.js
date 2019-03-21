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
    pose: 'end',
    results: null,
    causes: null,
    setLand: this.setLand.bind(this),
    setPose: this.setPose.bind(this),
    setResults: this.setResults.bind(this),
    setCauses: this.setCauses.bind(this),
  };

  setLand(land) {
    this.setState({ land });
  }

  setPose(pose) {
    this.setState({ pose });
  }

  setResults(results) {
    this.setState({ results });
  }

  setCauses(causes) {
    this.setState({ causes });
  }

  render = () => {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}
