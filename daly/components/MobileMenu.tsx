import cn from 'classnames';
import Link from 'next/link';
import React, { useState, useEffect, createRef } from 'react';
import styles from '../src/styles/mobile-menu.module.css'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className='visible md:hidden flex flex-col'>
    <div className='mr-6 flex'>
      <button
        className={cn(
            styles.burger,
             'bg-transparent w-[40px] h-[40px] absolute visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
    </div>
    <div className='flex flex-col ml-12 absolute -top-[350%] w-full max-w-[80%]'>
      {isMenuOpen && (
        <ul
          className={cn(
            styles.menu,
            'flex -top-[350%] flex-col rounded-t-2xl absolute bg-gray-100 dark:bg-gray-900',
            styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 pl-[50%] dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/" className="flex w-auto pb-4">
              Home
            </Link>
          </li>
          <li
            className="border-b border-gray-300 pl-[50%] dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/about" className="flex w-auto pb-4">
              About
            </Link>
          </li>
          <li
            className="border-b border-gray-300 pl-[50%] dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/team" className="flex w-auto pb-4">
              Team
            </Link>
          </li>
        </ul>
       )} 
       </div>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
