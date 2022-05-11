import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from 'app/shared/components/LazyFallback';

const PerformersPage = React.lazy(() => import('./pages/Main'));

export const PerformersRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={PerformersPage}></Route>
    </Switch>
  </React.Suspense>
);
