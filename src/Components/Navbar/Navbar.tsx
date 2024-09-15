import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid';
import { NavigationItem } from '@/types/navigation';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';

const initialNavigation: NavigationItem[] = [
  { name: 'Home', href: '#', current: true },
  { name: 'Products', href: '#product', current: false },
  { name: 'Categories', href: '#categories', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact Us', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  const [navigation, setNavigation] = useState(initialNavigation);
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (name: string) => {
    const updatedNavigation = navigation.map((item) =>
      item.name === name
        ? { ...item, current: true }
        : { ...item, current: false }
    );
    setNavigation(updatedNavigation);
  };

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-[#c4c4c4] z-50">
      <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
        <div className="relative flex items-center h-8 sm:h-12">
          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <MenuIcon
              className="h-6 w-6 text-[#07484a] ml-4"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
            <img
              className="h-25 w-25"
              src="/images/logo.png"
              alt="Crypto-Logo"
            />
            <div className="flex items-center sm:space-x-6 space-x-3 lg:mr-4">
              <SearchIcon
                className="h-5 w-5 text-[#07484a]"
                aria-hidden="true"
              />
              <ShoppingCartIcon
                className="h-5 w-5 text-[#07484a]"
                aria-hidden="true"
              />
              <UserCircleIcon
                className="h-5 w-5 text-[#07484a]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Desktop Logo */}
          <div className="flex flex-1 items-center justify-start lg:justify-start lg:absolute lg:left-0">
            <img
              className="block h-10 w-20px lg:hidden"
              src="/images/logo.png"
              alt="Crypto-Logo"
            />
            <img
              className="hidden h-48px w-48px lg:block"
              src="/images/logo.png"
              alt="Crypto-Logo"
            />
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleSetActive(item.name)}
                  className={classNames(
                    item.current
                      ? 'text-[#07484a] font-semibold underline underline-offset-2'
                      : 'text-[#07484a] hover:text-offwhite hover-underline',
                    'px-3 py-4 rounded-md text-md font-normal'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-3 text-xl font-semibold lg:justify-end">
            <SearchIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
            <ShoppingCartIcon
              className="h-5 w-5 text-[#07484a]"
              aria-hidden="true"
            />
            <UserCircleIcon
              className="h-5 w-5 text-[#07484a]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* DRAWER FOR MOBILE VIEW */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata />
        </Drawer>
      </div>
    </Disclosure>
  );
};

export default Navbar;
