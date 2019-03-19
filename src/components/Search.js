import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { withContext } from 'Provider';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 8rem;
  padding-top: 8rem;
`;

const Search = ({ setCountryName }) => (
  <Formik
    initialValues={{ terms: '' }}
    onSubmit={(values, { setSubmitting }) => {
      const { terms } = values;
      setCountryName(terms);
      setSubmitting(false);
    }}
  >
    {({
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <StyledForm onSubmit={handleSubmit}>
        <div className="form-group has-icon-left">
          <input
            type="terms"
            name="terms"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.terms}
            className="form-input"
          />
          <i className="form-icon icon icon-arrow-right"></i>
        </div>
        <button type="submit" className="btn" disabled={isSubmitting}>
          Rechercher
        </button>
      </StyledForm>
    )}
  </Formik>
);

export default withContext('setCountryName')(Search);
