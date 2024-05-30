'use client';

import { useState } from 'react';
import Searchbar from '@/components/Homepage/Searchbar';
import SearchResult from '@/components/Homepage/SearchResult';

export default function Home() {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const searchData = (input: string) => {
    setTitle(input);
    setPage(1);
  };

  const previousPage = () => {
    setPage((prevState) => Math.max(prevState - 1, 0));
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-10 pb-10 md:px-24 md:pb-24">
      <Searchbar searchData={searchData} />
      <SearchResult
        title={title}
        page={page}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}
