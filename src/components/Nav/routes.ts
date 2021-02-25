export interface NavItem {
  path: string;
  text: string;
}

const routes: NavItem[] = [
  {
    path: '/listings',
    text: 'Property Listings',
  },
  {
    path: '/saved',
    text: 'Saved Listings',
  },
];

export default routes;
