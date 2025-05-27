import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Earth, Menu as MenuIcon, ShoppingBasket, User2 } from 'lucide-react';
import logoDefault from '../../assets/images/logo.svg';
import logoBlack from '../../assets/images/shared/logoblack.svg'; // لوگوی سیاه جدید

import { MenuVivid } from './MenuVivid/MenuVivid';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  z-index: 1000;
  transition: 0.3s ease;
 
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none'};
`;

const Logo = styled(motion.img)`
  height: 40px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))<{ active?: boolean }>`
  position: relative;
  color: ${({ active }) => (active ? '#000' : '#fff')};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? '700' : '400')};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background: ${({ active }) =>
      active ? 'linear-gradient(45deg, #000, #333)' : 'linear-gradient(45deg, #00e0ff, #00a0ff)'};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavIcon = styled(motion.div)<{ active?: boolean }>`
  color: ${({ active }) => (active ? '#000' : '#fff')};
  cursor: pointer;

  &:hover {
    color: ${({ active }) => (active ? '#333' : '#00e0ff')};
  }
`;

const MobileMenuButton = styled(motion.div)`
  display: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0 0 0 auto;
  width: 70%;
  background: rgba(0, 20, 30, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 2rem;
`;

const MobileNavLink = styled(motion(Link))<{ active?: boolean }>`
  color: ${({ active }) => (active ? '#000' : '#fff')};
  font-size: 1.5rem;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 0.5rem;
`;

const MenuWrapper = styled(motion.div)`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1100;
  width: 320px;
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVividOpen, setMenuVividOpen] = useState(false);

  // چک می‌کنیم آیا مسیر فعلی products است
  const isProductsPage = location.pathname.includes('/products');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((p) => !p);
  const toggleMenuVivid = () => setMenuVividOpen((p) => !p);

  const links = ['Bottle', 'Tablete', 'Products', 'Science', 'Contact'];

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Logo src={isProductsPage ? logoBlack : logoDefault} alt="Logo" />

        <NavLinks>
          {links.map((t) => {
            const active = isProductsPage && t.toLowerCase() === 'products';
            return (
              <NavLink
                key={t}
                to={`/${t.toLowerCase()}`}
                active={active}
               style={{color: !isProductsPage ? '#fff' : '#000'}}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t}
              </NavLink>
            );
          })}
        </NavLinks>

        <NavIcons>
          {!menuVividOpen && (
            <>
              <NavIcon  whileHover={{ scale: 1.2 }}>
                <Earth color={!isProductsPage ? '#fff' : '#000'}/>
              </NavIcon>
              <NavIcon  whileHover={{ scale: 1.2 }} onClick={toggleMenuVivid}>
                <User2 color={!isProductsPage ? '#fff' : '#000'} />
              </NavIcon>
              <NavIcon  whileHover={{ scale: 1.2 }} onClick={toggleMenuVivid}>
                <ShoppingBasket color={!isProductsPage ? '#fff' : '#000'}/>
              </NavIcon>
            </>
          )}

          <MobileMenuButton onClick={toggleMobileMenu} whileTap={{ scale: 0.9 }}>
            <MenuIcon />
          </MobileMenuButton>
        </NavIcons>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            key="mobileDrawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 35 }}
          >
            {links.map((t) => {
              const active = isProductsPage && t.toLowerCase() === 'products';
              return (
                <MobileNavLink
                  key={t}
                  to={`/${t.toLowerCase()}`}
                  active={active}
                  whileHover={{ x: 10 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t}
                </MobileNavLink>
              );
            })}
          </MobileMenu>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuVividOpen && (
          <MenuWrapper
            key="menuVivid"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MenuVivid onClose={toggleMenuVivid} />
          </MenuWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
