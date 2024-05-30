export type TMoviesResultsWithGenreNames = {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  genreNames: string[];
}[];
