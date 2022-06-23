import Header from './components/header/index';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
    </>
  );
};
export default Layout;
