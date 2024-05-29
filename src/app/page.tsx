'use client';

import { useState } from 'react';
import Searchbar from '@/components/Homepage/Searchbar';
import SearchResult from '@/components/Homepage/SearchResult';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import { TGenresQuery } from '@/types/genresQuery.type';

export default function Home() {
  const [title, setTitle] = useState('');

  const {
    data: genresQuery,
    isLoading,
    isError,
    error
  } = useQuery<TGenresQuery>({
    queryKey: ['genres'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json'
          }
        }
      );
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.status_message);
      }

      return json;
    }
  });

  const searchData = (input: string) => {
    setTitle(input);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-10 pb-10 md:px-24 md:pb-24">
      <Searchbar searchData={searchData} />
      <SearchResult
        searchData={searchData}
        title={title}
        genresQuery={genresQuery}
      />
    </div>
  );
}
