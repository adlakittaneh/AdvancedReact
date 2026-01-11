import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.error)
      return <button onClick={() => this.setState({ error: false })}>Reset</button>;
    return this.props.children;
  }
}
