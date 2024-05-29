'use client';

import { useQuery } from '@tanstack/react-query';
import ContainerWrapper from '../ContainerWrapper';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import Link from 'next/link';
import { getGenreNames } from '@/lib/getGenreNames';
import { TGenresQuery } from '@/types/genresQuery.type';
import { TMovieQuery } from '@/types/movieQuery.type';
import { Star } from 'lucide-react';

type SearchResultProps = {
  searchData: (title: string) => void;
  title: string;
};

const SearchResult = ({ searchData, title }: SearchResultProps) => {
  const { data: genresQuery } = useQuery<TGenresQuery>({
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

  const {
    data: moviesQuery,
    isLoading,
    isError,
    error
  } = useQuery<TMovieQuery>({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
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

      searchData('');

      return json;
    },
    enabled: !!title
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  const moviesWithGenreNames = moviesQuery?.results.map((movie) => {
    return {
      ...movie,
      genreNames: getGenreNames(genresQuery, movie.genre_ids)
    };
  });

  return (
    <ContainerWrapper className="flex-col justify-center">
      {moviesQuery && (
        <div>
          <h1 className="w-full rounded-t-lg bg-black px-5 py-2 text-2xl font-bold text-white">
            Search results
          </h1>
          <div className="border-x-[1px] border-b-[1px] border-solid border-stone-400 py-2">
            <div>
              <div className="mx-5 flex flex-row justify-between gap-5 border-b-2 border-gray-800">
                <div className="w-20 text-xl font-semibold md:w-36 lg:w-48">
                  Title
                </div>
                <div className="w-20 text-xl font-semibold md:w-36 lg:w-48">
                  Category
                </div>
                <div className="w-20 text-end text-xl font-semibold md:w-36 lg:w-48">
                  Rating
                </div>
              </div>
              <ul className="my-3 flex flex-col">
                {moviesWithGenreNames?.length === 0 ? (
                  <div className="my-5 text-center opacity-50">
                    Movie does not exist in the TMDB database!
                  </div>
                ) : (
                  moviesWithGenreNames?.map((movie) => {
                    return (
                      <div key={movie.id}>
                        <li className="py-4 hover:cursor-pointer hover:bg-yellow-500 hover:bg-opacity-15">
                          <div className="flex flex-row items-center justify-between gap-2 px-5">
                            <Link
                              href="/details"
                              className="w-20 overflow-x-auto md:w-36 lg:w-48"
                            >
                              {movie.title}
                            </Link>
                            <div className="w-20 overflow-x-auto md:w-36 lg:w-48">
                              {movie.genreNames.join(', ')}
                            </div>
                            <div className="flex w-20 items-center justify-end gap-2 text-end md:w-36 lg:w-48">
                              <Star
                                className="h-5 w-5"
                                fill="#eab308"
                                strokeWidth={0}
                              />
                              <div>
                                <span className="font-semibold">
                                  {movie.vote_average.toFixed(1)}
                                </span>
                                /10
                              </div>
                            </div>
                          </div>
                        </li>
                        <div className="mx-5 my-1 h-[1px] bg-gray-800"></div>
                      </div>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </ContainerWrapper>
  );
};

export default SearchResult;
