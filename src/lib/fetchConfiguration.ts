export const fetchConfiguration = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
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
