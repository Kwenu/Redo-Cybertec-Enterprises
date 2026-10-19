import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { NavDropdown } from './NavDropdown';
import { primaryNav } from '../../data/navigation';
import { navLinkClass } from '../../utils/navStyles';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-6 px-6 lg:px-8">
        <Link to="/" aria-label="Cybertec Enterprises (Pvt) Ltd - Home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex 2xl:gap-2">
          {primaryNav.map((item) =>
          item.children ?
          <NavDropdown key={item.to} item={item} /> :

          <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => navLinkClass(isActive)}>
                {item.label}
              </NavLink>

          )}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
            `ml-6 whitespace-nowrap rounded border px-3.5 py-1.5 text-[13px] 2xl:ml-10 2xl:px-4 2xl:text-sm font-medium transition-colors duration-150 ${
            isActive ?
            'border-navy-900 bg-navy-900 text-white' :
            'border-line text-navy-900 hover:border-navy-900'}`

            }>
            
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded text-navy-900 xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}>
          
          {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white xl:hidden">
          
            <ul className="mx-auto max-w-site px-6 py-4">
              {[...primaryNav, { label: 'Contact', to: '/contact' }].map((item) =>
            <li key={item.to} className="border-b border-line last:border-0">
                  <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                `flex min-h-[48px] items-center text-[15px] font-medium ${
                isActive ? 'text-brand-700' : 'text-navy-900'}`

                }>
                
                    {item.label}
                  </NavLink>
                </li>
            )}
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}