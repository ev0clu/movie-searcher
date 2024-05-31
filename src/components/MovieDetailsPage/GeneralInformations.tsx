import Image from 'next/image';
import { TMovieWithExternalIdQuery } from '@/types/movieWithExternalIdQuery.type';
import { TConfiguration } from '@/types/configuration.type';
import placeholderImgSrc from '../../../public/placeholder-image.png';
import SectionContainer from '../SectionContainer';

type GeneralInformationsProps = {
  movieQuery: TMovieWithExternalIdQuery | undefined;
  configuration: TConfiguration | undefined;
};

const GeneralInformations = ({
  movieQuery,
  configuration
}: GeneralInformationsProps) => {
  return (
    <SectionContainer>
      <div className="relative h-max overflow-hidden rounded-md">
        {movieQuery?.poster_path === null ||
        !configuration?.images ||
        !movieQuery?.genres ||
        movieQuery?.genres.length === 0 ? (
          <Image
            src={placeholderImgSrc}
            alt="placeholder-image"
            width={185}
            height={278}
            priority
          />
        ) : (
          <Image
            src={`${configuration?.images.base_url}${configuration?.images.poster_sizes[2]}${movieQuery?.poster_path}`}
            alt="movie-image"
            width={185}
            height={278}
            priority
          />
        )}
      </div>
      <div className="max-w-[400px]">
        <h1 className="text-lg font-semibold text-neutral-700 md:text-2xl">
          {movieQuery?.title}
        </h1>
        <div className="text-sm font-semibold text-neutral-500 md:text-base">
          {movieQuery?.release_date}
        </div>
        <div className="my-2 flex w-[200px] flex-row gap-2 overflow-x-auto md:w-full">
          {movieQuery?.genres &&
            movieQuery?.genres.length !== 0 &&
            movieQuery?.genres.map((genre) => {
              return (
                <div
                  key={genre.id}
                  className="text-nowrap rounded-3xl border border-stone-700 px-2 py-1 text-sm"
                >
                  {genre.name}
                </div>
              );
            })}
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="text-md font-semibold md:text-lg">
            Rating:
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-800 text-sm font-semibold text-white">
            {movieQuery?.vote_average.toFixed(1)}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default GeneralInformations;
