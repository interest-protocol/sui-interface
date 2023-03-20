import { Component, ReactElement } from 'react';

import { Props, State } from './error-boundary.types';
import BoundaryMessage from './error-boundary-message';

class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  render(): ReactElement {
    if (this.state.error) return <BoundaryMessage {...this.state} />;

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
