import { Disclosure } from '@headlessui/react';
import React from 'react';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';


interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home-section', current: false },
  { name: 'Exchange', href: '#exchange-section', current: false },
  { name: 'Features', href: '#features-section', current: false },
  { name: 'FAQ', href: '#faq-section', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar bg-[#c4c4c4]">
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
              <SearchIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
              <ShoppingCartIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
              <UserCircleIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
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
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-[#07484a] font-semibold underline'
                      : 'text-[#07484a] hover:text-offwhite hover-underline',
                    'px-3 py-4 rounded-md text-md font-normal'
                  )}
                  aria-current={item.href ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-3 text-xl font-semibold lg:justify-end">
            <SearchIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
            <ShoppingCartIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
            <UserCircleIcon className="h-5 w-5 text-[#07484a]" aria-hidden="true" />
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
