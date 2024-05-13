import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || 'Component'})`;

  return WithLogging;
};

export default WithLogging;