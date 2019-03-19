import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { withContext } from '../Provider';

const StyledInput = styled.input`
  width: 360px;
  background-color: #ededed;
  box-shadow: none;
  border: none;
`;

const StyledIconWrapper = styled.span`
  pointer-events: initial !important;
  cursor: pointer;
`;

const StyledIcon = styled.i`
  color: #3C3C3B;
`;

const Search = ({ setCountryName }) => {
  const onSubmit = values => {
    const { terms } = values;
    console.log(values);
    setCountryName(terms);
  };
  return (
    <Formik
      initialValues={{ terms: '' }}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleBlur,
        handleSubmit,
        handleChange,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="control has-icons-right">
            <StyledInput
              type="terms"
              name="terms"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.terms}
              className="input is-rounded"
              placeholder="Essayez France, Amérique du sud ou Asie"
            />
            <StyledIconWrapper className="icon is-small is-right" onClick={onSubmit}>
              <StyledIcon className="fas fa-search"></StyledIcon>
            </StyledIconWrapper>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default withContext('setCountryName')(Search);
