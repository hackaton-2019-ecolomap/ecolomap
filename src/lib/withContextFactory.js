import React from 'react';

const toPropsFrom = context => pick =>
  typeof pick === 'string' ? { [pick]: context[pick] } : pick(context);

const toObject = (finalProps, prop) => ({ ...finalProps, ...prop });

export default Context => (...propNames) => {
  const mapContextToProps = context => propNames.map(toPropsFrom(context)).reduce(toObject, {});

  return Component => props => (
    <Context.Consumer>
      {context => <Component {...props} {...mapContextToProps(context)} />}
    </Context.Consumer>
  );
};
