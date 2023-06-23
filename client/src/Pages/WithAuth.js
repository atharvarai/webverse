import React from 'react';

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    getToken() {
      // Retrieve the token from localStorage or sessionStorage
      return localStorage.getItem('jwtToken');
    }

    render() {
      // Pass the token as a prop to the wrapped component
      return <WrappedComponent token={this.getToken()} {...this.props} />;
    }
  };
};

export default withAuth;
