import Link from 'next/link';
import Image from 'next/image';

const Footer = ({sectionRefs}) => (
  <footer className="bg-black bg-opacity-50 text-text fixed bottom-0 left-0 w-full z-10 font-bold">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-row items-center">
      <span className="text-sm flex-col">
        © 2024{' '}
        <Link
          href="https://natasha-osborne.dev"
          className="underline hover:text-muted-gold"
        >
          Natasha Osborne
        </Link>
        . All Rights Reserved.
      </span>
      <Link
        href="https://github.com/natasha08"
        target="_blank"
        className="justify-end flex-col"
      >
        <Image src="/octocat.png" alt="Github Logo" height="40" width="40" style={{ width: "40px", height: "40px" }}  />
      </Link>
    </div>
  </footer>
);

export default Footer;
