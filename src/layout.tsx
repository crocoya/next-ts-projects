import Header from './components/header/index';
import styled from 'styled-components';

const Layout = ({ children }: any) => {
  return (
    <NextApp>
      <Header />
      <Main className='main'>{children}</Main>
    </NextApp>
  );
};
export default Layout;

const NextApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;300;400;500;600;700&display=swap');
`;

const Main = styled.main`
  height: 100vh;
  padding-top: 10vh;
`;
