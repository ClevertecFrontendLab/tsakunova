import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { RouteNames } from 'types/enum';

export const PrivateRouter = () => {
  const user = useTypedSelector(({ login }) => login.user);

  return user ? <Outlet /> : <Navigate to={RouteNames.auth} />;
};
