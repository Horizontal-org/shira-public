import { useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    if (route === '/login' || route === '/create-space') {
      const adminUrl = process.env.REACT_APP_ADMIN_URL;
      window.location.href = `${adminUrl}${route}`;
    } else {
      navigate(route);
    }
  };

  return handleNavigation;
};