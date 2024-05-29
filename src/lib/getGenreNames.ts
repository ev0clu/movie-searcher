import { TGenresQuery } from '@/types/genresQuery.type';

export const getGenreNames = (
  genresQuery: TGenresQuery | undefined,
  genreIds: number[]
): string[] => {
  return genreIds.map((id) => {
    if (genresQuery === undefined) {
      return 'Unknown';
    }

    const genre = genresQuery.genres.find((genre) => {
      if (genre.id === id) {
        return genre.name;
      }
    });
    return genre ? genre.name : 'Unknown';
  });
};
