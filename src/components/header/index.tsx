import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../responsive';

const HeaderItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Discovery Projects',
    url: '/',
  },
  {
    title: 'Blog',
    url: '/',
  },
  {
    title: 'Contact',
    url: '/',
  },
];

const SocialItems = [
  {
    social: 'Github',
    icon: <FiGithub />,
    url: 'https://github.com/crocoya/next-ts-projects',
  },
];

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.intermediate });
  // const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <HeaderFixed>
        <HeaderFull>
          <HeaderGrow>
            <HeaderFlex>
              <Link href='/' passHref>
                <a>Next Projects</a>
              </Link>
            </HeaderFlex>
          </HeaderGrow>

          <ItemsCenter>
            {!isMobile && (
              <ItemsFlex>
                {HeaderItems.map((item, i) => (
                  <LinkLi key={i}>
                    <Link href={item.url} passHref>
                      <LinkItems>{item.title}</LinkItems>
                    </Link>
                  </LinkLi>
                ))}
                {SocialItems.map((item, i) => (
                  <LinkLi key={i}>
                    <LinkSocials href={item.url}>{item.icon}</LinkSocials>
                  </LinkLi>
                ))}
              </ItemsFlex>
            )}
          </ItemsCenter>
          {/* {isMobile && (
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          )} */}
        </HeaderFull>
      </HeaderFixed>
      {/* {isMobile && <MenuLinks isOpen={isOpen} />} */}
    </>
  );
};

export default Header;

const HeaderFixed = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 32px 32px 0 32px;
`;

const HeaderFull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 100%;
`;

const HeaderGrow = styled.div`
  flex-grow: 1;
`;

const HeaderFlex = styled.div`
  display: flex;
`;

const ItemsCenter = styled.div`
  display: flex;
  align-items: center;
`;

const ItemsFlex = styled.ul`
  display: flex;
  align-items: center;
`;

const LinkLi = styled.li`
  margin-left: 24px;

  &:first-child {
    margin: 0;
  }
`;

const LinkItems = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const LinkSocials = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
