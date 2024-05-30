'use client';

import Container4xlWrapper from '@/components/Container4xlWrapper';
import ErrorMessage from '@/components/ErrorMessage';
import Loader from '@/components/Loader';
import DetailInfomations from '@/components/MovieDetailsPage/DetailInfomations';
import GeneralInformations from '@/components/MovieDetailsPage/GeneralInformations';
import { fetchConfiguration } from '@/lib/fetchConfiguration';
import { fetchMovieById } from '@/lib/fetchMovieById';
import { TConfiguration } from '@/types/configuration.type';
import { TMovieWithExternalIdQuery } from '@/types/movieWithExternalIdQuery.type';
import { useQuery } from '@tanstack/react-query';

const Details = ({ params }: { params: { movieId: string } }) => {
  const { data: configuration } = useQuery<TConfiguration>({
    queryKey: ['configuration'],
    queryFn: () => fetchConfiguration()
  });

  const {
    data: movieQuery,
    isLoading,
    isError,
    error
  } = useQuery<TMovieWithExternalIdQuery>({
    queryKey: ['movie', { id: params.movieId }],
    queryFn: () => fetchMovieById(params.movieId)
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  return (
    <div className="flex justify-center px-10 pb-10 md:px-24 md:pb-24">
      <Container4xlWrapper className="flex-col items-center gap-5">
        <GeneralInformations
          movieQuery={movieQuery}
          configuration={configuration}
        />
        <DetailInfomations movieQuery={movieQuery} />
      </Container4xlWrapper>
    </div>
  );
};

export default Details;
