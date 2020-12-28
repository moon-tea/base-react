import React, { lazy, Suspense } from 'react';

const LazySpaceLayout1 = lazy(() => import('./SpaceLayout1'));

const SpaceLayout1 = props => (
  <Suspense fallback={null}>
    <LazySpaceLayout1 {...props} />
  </Suspense>
);

export default SpaceLayout1;
