import React from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { withRouter } from 'react-router-dom';
import { withContext } from '../Provider';

const StyledInput = styled.input`
  width: 22.1rem;
  background-color: #ededed;
  box-shadow: none;
  border: none;
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
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSelect = value => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setLand, landsList, history } = this.props;
    const { value } = this.state;
    if (landsList.includes(value)) {
      setLand(value);
      history.push('/biomes');
    }
  };

  render = () => {
    const { landsList } = this.props;
    const { value } = this.state;
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
                placeholder="Essayez France, Amérique du sud ou Asie"
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

export default withContext('setLand', 'landsList')(withRouter(Search));
