import React from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { withRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { withContext } from '../Provider';
import sleep from '../lib/utils';

const StyledInput = styled.input`
  width: ${props => (props.isMobile ? '22rem' : '37rem')};
  background-color: #ededed;
  box-shadow: none !important;
  border: ${props => (props.state ? '1px solid #ED777B' : 'none')} !important;
  &:hover {
    border: ${props =>
      props.state ? '1px solid #ED777B' : '1px solid #9D9D9C'} !important;
  }
`;

const StyledIconWrapper = styled.span`
  pointer-events: initial !important;
  cursor: pointer;
`;

const StyledIcon = styled.i`
  color: #3c3c3b;
`;

class Search extends React.Component {
  state = {
    value: '',
    error: false
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value, error: false });
  };

  handleSelect = value => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setLand, landsList, setPose, history, location } = this.props;
    const { value } = this.state;
    if (landsList.includes(value)) {
      if (location.pathname === '/') setPose('end');
      setLand(value);
      sleep(500).then(() => history.push('/biomes'));
    } else if (value) {
      this.setState({ error: true });
    }
  };

  render = () => {
    const { landsList } = this.props;
    const { value, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="control has-icons-right">
          <Autocomplete
            items={landsList}
            getItemValue={item => item}
            value={value}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            shouldItemRender={(item, inputValue) =>
              item.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
            }
            renderItem={(item, highlighted) => (
              <div
                style={{
                  backgroundColor: highlighted ? '#ededed' : 'transparent'
                }}
              >
                {item}
              </div>
            )}
            renderInput={props => (
              <StyledInput
                {...props}
                className="input is-rounded"
                placeholder="Essayez France, Angleterre ou Chine"
                state={error}
                isMobile={isMobile}
              />
            )}
          />
          <StyledIconWrapper
            className="icon is-small is-right"
            onClick={this.handleSubmit}
          >
            <StyledIcon className="fas fa-search" />
          </StyledIconWrapper>
        </div>
      </form>
    );
  };
}

export default withContext('setLand', 'landsList', 'setPose')(
  withRouter(Search)
);
