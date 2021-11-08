import { Brand, LangPicker } from 'components/atoms';
import { Navigate, Outlet } from 'react-router-dom';
import { routeNavigate } from 'routes';
import { useStoreSelector } from 'store';
import styled from 'styled-components';

export const NonAuthLayout = () => {
  const { isAuthenticated } = useStoreSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to={routeNavigate('dashboard')} />;
  }

  return (
    <Wrapper>
      <div className="container">
        <Brand />
        <Outlet />
      </div>
      <LangPicker />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  .container {
    min-width: 20rem;
    padding: 1rem 1rem 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.2);
  }
`;