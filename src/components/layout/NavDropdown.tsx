import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { navLinkClass } from '../../utils/navStyles';
import type { NavItem } from '../../types/content';

interface NavDropdownProps {
  item: NavItem;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  const menuId = `menu-${item.to.replace(/\W/g, '')}`;

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpen(false);
      }}>
      
      <NavLink to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
        {item.label}
      </NavLink>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Show ${item.label} menu`}
        onClick={() => setOpen((o) => !o)}
        className="-ml-1.5 rounded p-1 text-muted transition-colors duration-150 hover:text-navy-900">
        
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true" />
        
      </button>
      <AnimatePresence>
        {open && item.children &&
        <motion.div
          id={menuId}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 top-full z-50 w-64 pt-4">
          
            <ul className="rounded-md border border-line bg-white p-1.5 shadow-lg shadow-navy-900/5">
              {item.children.map((child) =>
            <li key={child.to}>
                  <Link
                to={child.to}
                className="block rounded px-3 py-2 text-sm text-ink transition-colors duration-150 hover:bg-surface hover:text-navy-900">
                
                    {child.label}
                    {child.description &&
                <span className="mt-0.5 block text-xs text-muted">{child.description}</span>
                }
                  </Link>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}