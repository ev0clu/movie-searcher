export type TMovieWithExternalIdQuery = {
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  vote_average: number;
  external_ids: {
    facebook_id: string;
    imdb_id: string;
    instagram_id: string;
    twitter_id: string;
    wikidata_id: string;
  };
};
