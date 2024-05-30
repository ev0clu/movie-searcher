import { TMoviesResultsWithGenreNames } from '@/types/moviesResultsWithGenreNames.type';
import { Star } from 'lucide-react';
import Link from 'next/link';

type MoviesListProps = {
  moviesWithGenreNames: TMoviesResultsWithGenreNames | undefined;
};

const MoviesList = ({ moviesWithGenreNames }: MoviesListProps) => {
  return (
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
                <div className="mx-5 flex flex-row items-center justify-between gap-2">
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
  );
};

export default MoviesList;
