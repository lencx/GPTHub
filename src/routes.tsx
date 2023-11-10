/* eslint-disable react-refresh/only-export-components */
import { useRoutes } from 'react-router-dom';

import GPTs from '@views/GPTs';
import Home from '@views/Home';

type RouteObject = {
  path: string;
  element?: JSX.Element;
  hideMenu?: boolean;
  children?: RouteObject[];
};

export const routes: Array<RouteObject> = [
  {
    path: '/gpts',
    element: <GPTs />,
  },
  {
    path: '/',
    element: <Home />,
  },
];

export default () => useRoutes(routes);
