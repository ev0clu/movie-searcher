'use client';

import { useEffect } from 'react';
import {
  keepPreviousData,
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import ContainerWrapper from '../ContainerWrapper';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import { getGenreNames } from '@/lib/getGenreNames';
import { TGenresQuery } from '@/types/genresQuery.type';
import { TMoviesQuery } from '@/types/moviesQuery.type';
import { fetchMovies } from '@/lib/fetchMovies';
import { fetchGenres } from '@/lib/fetchGenres';
import MoviesList from './SearchResult/MoviesList';
import Pagination from './SearchResult/Pagination';

type SearchResultProps = {
  title: string;
  page: number;
  previousPage: () => void;
  nextPage: () => void;
};

const SearchResult = ({
  title,
  page,
  previousPage,
  nextPage
}: SearchResultProps) => {
  const queryClient = useQueryClient();

  const { data: genresQuery } = useQuery<TGenresQuery>({
    queryKey: ['genres'],
    queryFn: () => fetchGenres()
  });

  const {
    data: moviesQuery,
    isLoading,
    isFetching,
    isError,
    error,
    isPlaceholderData
  } = useQuery<TMoviesQuery>({
    queryKey: ['movies', { title, page }],
    queryFn: () => fetchMovies(title, page),
    placeholderData: keepPreviousData,
    enabled: !!title
  });

  useEffect(() => {
    if (
      !isPlaceholderData &&
      page !== moviesQuery?.total_pages &&
      !!title
    ) {
      queryClient.prefetchQuery({
        queryKey: ['movies', { title, page: page + 1 }],
        queryFn: () => fetchMovies(title, page + 1)
      });
    }
  }, [moviesQuery, isPlaceholderData, page, title, queryClient]);

  if (isLoading || isFetching) {
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
              <MoviesList
                moviesWithGenreNames={moviesWithGenreNames}
              />
              {moviesWithGenreNames?.length !== 0 && (
                <Pagination
                  page={page}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  totalPages={moviesQuery.total_results}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </ContainerWrapper>
  );
};

export default SearchResult;
