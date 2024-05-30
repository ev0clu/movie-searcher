import { TMovieWithExternalIdQuery } from '@/types/movieWithExternalIdQuery.type';

type DetailInfomationsProps = {
  movieQuery: TMovieWithExternalIdQuery | undefined;
};

const DetailInfomations = ({
  movieQuery
}: DetailInfomationsProps) => {
  return (
    <section className="flex w-[300px] flex-col sm:w-[500px] md:w-[580px]">
      <div className="text-2xl font-semibold">Overview</div>
      <div>{movieQuery?.overview}</div>
      <div className="mt-10">
        <div className="text-2xl font-semibold">More information</div>
        {!movieQuery?.external_ids.wikidata_id &&
          !movieQuery?.external_ids.imdb_id && (
            <div className="text-stone-600">
              No morre information available
            </div>
          )}
        <div className="mt-3 flex h-5 flex-row items-center gap-1 font-semibold">
          {movieQuery?.external_ids.wikidata_id && (
            <a
              className="text-stone-600"
              target="_blank"
              href={`https://www.wikidata.org/wiki/${movieQuery.external_ids.wikidata_id}`}
            >
              WIKIDATA
            </a>
          )}
          {movieQuery?.external_ids.imdb_id && (
            <>
              {movieQuery?.external_ids.wikidata_id && (
                <div className="mx-5 h-full w-[1px] bg-gray-800"></div>
              )}
              <a
                className="rounded-md bg-yellow-500 px-2 py-1"
                target="_blank"
                href={`https://www.imdb.com/title/${movieQuery?.external_ids.imdb_id}`}
              >
                IMDb
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailInfomations;
