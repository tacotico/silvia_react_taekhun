import { Suspense, ReactNode, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@store/user';
import { ROUTES } from '@lib/config/constants';
import MainLayout from '@pages/MainLayout';
const ClientPage = lazy(() => import('@pages/ClientPage'));
const HomePage = lazy(() => import('@pages/HomePage'));

const App = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Router>
      <Suspense fallback={<></>}>
        <MainLayout>
          <Routes>
            <Route path={ROUTES.base} element={<Navigate replace to={ROUTES.home} />} />
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route
              path={ROUTES.client}
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Suspense fallback={<></>}>
                    <ClientPage />
                  </Suspense>
                </PrivateRoute>
              }
            />
            <Route path={ROUTES.client} element={<ClientPage />} />
            <Route path={ROUTES.etc} element={<Navigate replace to={ROUTES.home} />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
};

interface IPrivateRoute {
  isLoggedIn: boolean;
  children: ReactNode;
}

const PrivateRoute = ({ isLoggedIn, children }: IPrivateRoute) => {
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.home} replace />;
  }
  return <>{children}</>;
};

export default App;
