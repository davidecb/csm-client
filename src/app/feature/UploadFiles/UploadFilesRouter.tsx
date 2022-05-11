import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from 'app/shared/components/LazyFallback';

const UploadFilesPage = React.lazy(() => import('./pages/Main'));

export const UploadFilesRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={UploadFilesPage}></Route>
    </Switch>
  </React.Suspense>
);
