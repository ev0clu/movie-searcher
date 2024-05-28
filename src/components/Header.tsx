import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black py-3">
      <Link
        href="/"
        className="px-10 text-3xl font-extrabold text-yellow-500 md:px-24"
      >
        Movie Searcher App
      </Link>
    </div>
  );
};

export default Header;
