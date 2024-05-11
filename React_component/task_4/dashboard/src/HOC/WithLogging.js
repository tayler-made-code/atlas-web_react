import React from 'react';

const WithLogging = (WrappedComponent) => {
  const componentName = WrappedComponent.displayName || 'Component';

  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${componentName})`;
};

export default WithLogging;