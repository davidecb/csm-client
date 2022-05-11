import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LogoFallback } from 'app/shared/components/LogoFallback';

const HeaderNav = React.lazy(() => import('./pages/Main'));

export const HeaderRouter = () => (
  <React.Suspense fallback={<LogoFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={HeaderNav}></Route>
    </Switch>
  </React.Suspense>
);
