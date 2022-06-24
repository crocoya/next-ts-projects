import Link from 'next/link';
import styled from 'styled-components';
import { HeaderItems, SocialItems } from './items';

const MenuLinks = ({ isOpen }: any) => {
  return (
    <MenuWrapper
      style={{
        opacity: isOpen ? '1' : '0',
        backdropFilter: isOpen ? 'blur(16px)' : 'blur(0px)',
        WebkitBackdropFilter: isOpen ? 'blur(16px)' : 'blur(0px)',
        visibility: isOpen ? 'visible' : 'hidden',
      }}
    >
      {isOpen && (
        <MenuContent>
          {HeaderItems.map((item, i) => (
            <MenuItems key={i}>
              <Link href={item.url} passHref>
                <MenuLink>{item.title}</MenuLink>
              </Link>
            </MenuItems>
          ))}
          {SocialItems.map((item, i) => (
            <MenuItems key={i}>
              <MenuLink href={item.url}>
                {item.social} {item.icon}
              </MenuLink>
            </MenuItems>
          ))}
        </MenuContent>
      )}
    </MenuWrapper>
  );
};

export default MenuLinks;

const MenuWrapper = styled.div`
  position: fixed;
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 100px 24px 0 24px;
  transition: ease 0.3s;

  /* opacity: ${(isOpen) => (isOpen ? '1' : '0')};
  backdrop-filter: ${(isOpen) => (isOpen ? 'blur(16px)' : 'blur(0px)')};
  -webkit-backdrop-filter: ${(isOpen) => (isOpen ? 'blur(16px)' : 'blur(0px)')};
  visibility: ${(isOpen) => (isOpen ? 'visible' : 'hidden')}; */
`;

const MenuContent = styled.ul`
  width: 100%;
`;

const MenuItems = styled.li`
  border-bottom: 2px solid;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
`;

const MenuLink = styled.a`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 0;
  font-size: 30px;
  transition: 0.3s;

  &:hover {
    color: red;
    transition: 0.3s;
  }

  svg {
    margin-left: auto;
  }
`;
