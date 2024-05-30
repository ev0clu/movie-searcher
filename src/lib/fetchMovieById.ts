export const fetchMovieById = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=external_ids`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    }
  );
  const json = await response.json();
  console.log(json);

  if (!response.ok) {
    throw new Error(json.status_message);
  }

  return json;
};
