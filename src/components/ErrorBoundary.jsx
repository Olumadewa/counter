import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main>
          <h1 className="poor-story text-white text-6xl">Error boundary</h1>
          <p className="roboto text-lg text-white">
            An error occurred while rendering this page
          </p>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
