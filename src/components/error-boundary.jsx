import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError = error => {
    // log error on cosole or send the log to remote server
    console.log(error);
    return { hasError: true };
  };

  render = () => {
    const FallBackUI = <h1>Something went wrong.</h1>;
    return this.state.hasError ? FallBackUI : this.props.children;
  };
}

export default ErrorBoundary;
