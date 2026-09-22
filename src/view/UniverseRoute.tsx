import { lazy, Suspense } from 'react';

const Universe = lazy(() => import('./Universe'));

const UniverseRoute = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        우주를 불러오는 중...
      </div>
    }
  >
    <Universe onShowDialog={() => {}} />
  </Suspense>
);

export default UniverseRoute;
