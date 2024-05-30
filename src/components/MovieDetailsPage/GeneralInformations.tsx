import Image from 'next/image';
import { TMovieWithExternalIdQuery } from '@/types/movieWithExternalIdQuery.type';
import { TConfiguration } from '@/types/configuration.type';
import placeholderImgSrc from '../../../public/placeholder-image.png';

type GeneralInformationsProps = {
  movieQuery: TMovieWithExternalIdQuery | undefined;
  configuration: TConfiguration | undefined;
};

const GeneralInformations = ({
  movieQuery,
  configuration
}: GeneralInformationsProps) => {
  return (
    <section className="flex w-[300px] flex-row gap-3 sm:w-[500px] md:w-[580px] md:gap-8">
      <div className="overflow-hidden rounded-md">
        {movieQuery?.poster_path === null ||
        !configuration?.images ||
        !movieQuery?.genres ||
        movieQuery?.genres.length === 0 ? (
          <Image
            src={placeholderImgSrc}
            alt="placeholder-image"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        ) : (
          <Image
            className="h-auto w-full"
            src={`${configuration?.images.base_url}${configuration?.images.poster_sizes[2]}${movieQuery?.poster_path}`}
            alt="movie-image"
            width={200}
            height={300}
            priority
          />
        )}
      </div>
      <div>
        <h1 className="text-lg font-semibold text-neutral-700 md:text-2xl">
          {movieQuery?.title}
        </h1>
        <div className="font-semibold text-neutral-500">
          {movieQuery?.release_date}
        </div>

        <ul className="gap-col-2 my-2 grid grid-cols-2">
          {movieQuery?.genres &&
            movieQuery?.genres.length !== 0 &&
            movieQuery?.genres.map((genre) => {
              return (
                <li key={genre.id} className="w-max italic">
                  {genre.name}
                </li>
              );
            })}
        </ul>
        <div className="flex flex-row items-center gap-2">
          <div className="text-lg font-semibold">Rating:</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-800 text-sm font-semibold text-white">
            {movieQuery?.vote_average.toFixed(1)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInformations;
