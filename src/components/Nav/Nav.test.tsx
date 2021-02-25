import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Nav from '.';

test('should render without error', () => {
  const routes = [
    { path: '/foo', text: 'foo' },
    { path: '/bar', text: 'bar' },
  ];
  const history = createMemoryHistory();
  history.push('/foo');
  render(
    <Router history={history}>
      <Nav items={routes} />
    </Router>
  );
  expect(true).toBe(true);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem').length).toBe(2);
  expect(screen.getAllByRole('link').length).toBe(2);
  const firstLinkText = routes[0].text;
  const secondLinkText = routes[1].text;

  let firstLink = screen.getByText(firstLinkText);
  let secondLink = screen.getByText(secondLinkText);
  expect(firstLink).toHaveClass('nav__list-link--selected');
  expect(secondLink).not.toHaveClass('nav__list-link--selected');

  userEvent.click(secondLink);
  firstLink = screen.getByText(firstLinkText);
  secondLink = screen.getByText(secondLinkText);
  expect(firstLink).not.toHaveClass('nav__list-link--selected');
  expect(secondLink).toHaveClass('nav__list-link--selected');
});
