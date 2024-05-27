import React, { Component } from 'react';

const WithLogging = WrappedComponent => {
  class WithLogging extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name ||'Component'})`;

  return WithLogging;
};

export default WithLogging;