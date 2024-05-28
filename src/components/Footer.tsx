import Image from 'next/image';
import React from 'react';
import githubSrc from '../../public/github-mark.svg';

const Footer = () => {
  return (
    <footer className="flex h-8 w-full flex-row items-center justify-center gap-2 px-5 py-4">
      <p>Copyright © Laszlo Kis 2024</p>
      <a
        className="flex items-center justify-center text-xl text-gray-950 hover:text-neutral-400"
        href="https://github.com/ev0clu"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={githubSrc}
          priority
          alt="github-logo"
          className={'h-5 w-5 rounded-full hover:opacity-60'}
        ></Image>
      </a>
    </footer>
  );
};

export default Footer;
