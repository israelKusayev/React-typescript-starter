import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ErrorBoundary, { ErrorBoundaryState } from '../errorBoundary';

describe('<ErrorBoundary />', () => {
  const tree = (children?: React.ReactNode) =>
    renderer
      .create(
        <MemoryRouter>
          <ErrorBoundary>{children}</ErrorBoundary>
        </MemoryRouter>
      )
      .toJSON();

  it('renders children if no error', () => {
    expect(
      tree(
        <div>
          <h1>I am inside the error boundary</h1>
        </div>
      )
    ).toMatchSnapshot();
  });

  it('renders error view if an error occurs', () => {
    const wrapper = mount<{}, ErrorBoundaryState>(
      <ErrorBoundary>
        <div>
          <h1>I am inside the error boundary</h1>
        </div>
      </ErrorBoundary>
    );

    wrapper.setState({
      hasError: true
    });

    expect(wrapper.text() === 'Something went wrong.').toBeTruthy();
  });
});
