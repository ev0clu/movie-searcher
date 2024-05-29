export type TMovieQuery = {
  page: number;
  results: {
    id: number;
    title: string;
    vote_average: number;
    genre_ids: number[];
  }[];
  total_page: number;
  total_results: number;
};
