export type TMoviesQuery = {
  page: number;
  results: {
    id: number;
    title: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
  }[];
  total_pages: number;
  total_results: number;
};
