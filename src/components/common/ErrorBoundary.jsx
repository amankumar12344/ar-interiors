import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-4">Something went wrong</h2>
          <p className="text-sm text-taupe mb-6 max-w-md">
            We apologize for the inconvenience. Please return to the homepage or reload the page.
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-2.5 bg-gold hover:bg-gold-dark text-charcoal font-semibold text-xs uppercase tracking-architectural rounded-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}