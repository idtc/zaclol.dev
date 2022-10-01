import { motion, PanInfo } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GitHubLogo, MenuIcon, VerifiedIcon, OtherLogo, LanguLogo, TwitterLogo, WorldLogo, ProjectLogo, XIcon, ididIcon, DiscordLogo, } from './Icons';
import Doing from './Doing';
import useSound from 'use-sound';
import { useAtom } from 'jotai';
import { doingAtom } from '../state/lanyard';
import ContentLoader from 'react-content-loader';

const pathnameOffsets: { [key: string]: number } = {
  '/': 0,
  '/projects': 39,
  '/coding': 78,
  '/other': 117,
};

const Nav = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [playSwitchPageSound] = useSound('/p-static/sounds/switch-page.mp3');

  const [dragYOffset, setDragYOffset] = useState(0);
  const [openOnMobile, setOpenOnMobile] = useState(false);
  const [presenceActive, setPresenceActive] = useState(false);

  const [doing] = useAtom(doingAtom);

  const dragConstraintsRef = useRef(null);

  useEffect(() => {
    if (openOnMobile) setOpenOnMobile(false);
    playSwitchPageSound();
  }, [pathname]);

  const pageIndicatorOffset = useMemo(
    () => (pathname ? pathnameOffsets[pathname] ?? -180 : 0),
    [pathname]
  );

  const pageIndicatorOffsetWithDecoration = useMemo(
    () => 71 + 33 + pageIndicatorOffset - dragYOffset,
    [pageIndicatorOffset, dragYOffset]
  );

  const onPageIndicatorDragEnd = useCallback(
    (_event, info: PanInfo) => {
      const goal = pageIndicatorOffset + info.offset.y;

      const closest = Object.entries(pathnameOffsets).reduce(
        ([prevPath, prevOffset], [curPath, curOffset]) => {
          return Math.abs(curOffset - goal) < Math.abs(prevOffset - goal)
            ? [curPath, curOffset]
            : [prevPath, prevOffset];
        }
      );

      if (closest[0] === pathname) return;

      setDragYOffset(dragYOffset + info.offset.y + info.velocity.y);
      history.push(closest[0]);
    },
    [history, pageIndicatorOffset, dragYOffset, pathname]
  );

  const toggleMobileMenu = useCallback(() => setOpenOnMobile(!openOnMobile), [openOnMobile]);

  return (
    <>
      <MobileHeader>
        <Title>ZacLoL</Title>
        {openOnMobile ? (
          <XIcon onClick={toggleMobileMenu} />
        ) : (
          <MenuIcon onClick={toggleMobileMenu} />
        )}
      </MobileHeader>
      <Container openOnMobile={openOnMobile}>
        {!openOnMobile ? (
          <PageIndicator
            whileHover={{ width: 3 }}
            drag="y"
            onDragEnd={onPageIndicatorDragEnd}
            dragConstraints={dragConstraintsRef}
            animate={{ top: pageIndicatorOffsetWithDecoration }}
          />
        ) : null}
        <Items>
          {!openOnMobile ? (
            <Row>
              <Location><VerifiedIcon /><Title>#CyberSecurity</Title></Location>
            </Row>
          ) : null}
          
          
          <div ref={dragConstraintsRef}>
            <Page active={pathname === '/' ? 1 : 0} to="/">
            <NavBars><WorldLogo /></NavBars> Who am I
            </Page>
            <Page active={pathname === '/projects' ? 1 : 0} to="/projects">
            <NavBars><ProjectLogo /></NavBars> My Projects
            </Page>
            <Page active={pathname === '/coding' ? 1 : 0} to="/coding">
            <NavBars><LanguLogo /></NavBars> What I Do
            </Page>
            <Page active={pathname === '/other' ? 1 : 0} to="/other">
            <NavBars><OtherLogo /></NavBars> Other
            </Page>
          </div>

          <Icons>
            <a href="https://twitter.com/illegaldi">
              <TwitterLogo />
            </a>
            <a href="https://github.com/idtc">
              <GitHubLogo />
            </a>
            <a href="https://discord.gg/6tXVdUe9sQ">
              <DiscordLogo />
            </a>

          </Icons>
          <Doing
            style={{ display: presenceActive ? 'block' : 'none' }}
            setActive={setPresenceActive}
          />
        </Items>
      </Container>
    </>
  );
};

const Container = styled.aside<{ openOnMobile: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  border-right: 1px solid #101010;
  height: 100vh;

  @media (max-width: 850px) {
    display: ${({ openOnMobile }) => (openOnMobile ? 'block' : 'none')};
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(7px);
    z-index: 1;
    top: 65px;
    width: 100%;
    height: calc(100% - 65px);
  }
`;

const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #101010;
  flex-shrink: 0;
  z-index: 1;

  svg {
    margin-left: auto;
    cursor: pointer;
    color: #ccc;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const PageIndicator = styled(motion.div)`
  width: 1px;
  height: 39px;
  background-color: #fff;
  position: absolute;
  right: -1px;
  cursor: pointer;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  padding: 10px 0px;
`;


const Location = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  height: 19px;
  font-size: 16px;
  margin-bottom: 15px;
  user-select: none;

  color: white;

  &:hover {
    color: #00a7ff;
    text-shadow: 0px 0px 8px #00a7ff;
  }

  svg:first-child {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    color: #ed390c;
  }
`;

const NavBars = styled.a`

  svg:first-child {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    color: #00a7ff;
  }
`;


const Page = styled(Link) <{ active: number }>`
  color: ${({ active }) => (active ? '#fff' : '#ccc')};
  padding: 10px 0px;
  display: flex;

  &:hover {
    /* background-color: #fff; */
    color: #fff;
  }
`;

const Icons = styled.div`
  margin-top: auto;
  color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #ccc;

    &:hover {
      color: #fff;
    }
  }
`;

export default Nav;
