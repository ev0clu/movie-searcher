export type TMoviesResultsWithGenreNames = {
  id: number;
  title: string;
  vote_average: number;
  genre_ids: number[];
  genreNames: string[];
}[];
