# **Movie Searcher App**

A Movie Searcher frontend app has built with Next.js framework. The app allows users to search for movies and list the findings. If the user click to a movie title, the app navigate to the given movie details page. The details page shows a brief overview about the movie. Additionally, the details page also contains 2 links, which let the user to navigate to imdb or wikidata pages and get more informations about the given movie. The app uses TMDB API to fetch informations from TMDB database.

## Features

- Allow user to search for movies
- Fetch data with TMDBW API usages
- Next.js framework is used
- Tailwind CSS is used without any UI library to style the app
- TanStack query is used to manage API fetches and cache the results
- Render-as-you-fetch approach is used
- Responsive design

## How to run from local repository

1. Clone the repository
2. Run `npm install` command in your terminal
3. Create .env file and add enviromental variables:
   `NEXT_PUBLIC_TMDB_API_KEY=`<br>
4. Run `npm run dev` command in your terminal
5. Server running at `http://localhost:3000/`

### Useful links and informations

- TMDB documentation:
  - [TMDB Docs](https://developer.themoviedb.org/docs/getting-started)
- Loading screen approaches (Fetch-than-render, Render-as-you-fetch, Suspense):
  - [Medium.com](https://medium.com/jspoint/introduction-to-react-v18-suspense-and-render-as-you-fetch-approach-1b259551a4c0)
  - [Linkedin.com](https://www.linkedin.com/pulse/fetch-then-render-render-as-you-fetch-fetch-on-render-amit-pal/)

### Dependencies

- [React](https://react.dev/)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [Lucide Icons](https://lucide.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Sharp Image optimalization](https://www.npmjs.com/package/sharp)
- [Next.js](https://nextjs.org/)

### Layout

![layout-1 picture](https://github.com/ev0clu/movie-searcher/blob/main/layout-1.png?raw=true)<br>
![layout-2 picture](https://github.com/ev0clu/movie-searcher/blob/main/layout-2.png?raw=true)<br>
