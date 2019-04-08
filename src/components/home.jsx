import * as React from "react";

// helpers
import { useFetch } from "hooks/fetch";
import { navigate } from "@reach/router";

// static values
import { api } from "utils/api";

// components
import { LoadingSaber } from "widgets/plasma";
import { Image } from "widgets/image";

// styles
import { _styles } from "styles/home";
import { StarWarsLogo } from 'visuals/wars';

function Movie({ movie }) {
  const movieId = movie.url.substr(-2, 1);
  const goToMovie = () => navigate(api.moviePage(movieId));

  return (
    <div className={_styles.eachMovie} onClick={goToMovie} >
      <Image text={movie.title} />
      <h4>{movie.title}</h4>
      <h6>Released on {movie.release_date}</h6>
      <h6>Episode {movie.episode_id}</h6>
      <h6>Director by {movie.director}</h6>
    </div>
  );
}

export function Home() {
  const { data, loading } = useFetch(api.films);
  return (
    <div>
      <LoadingSaber condition={loading} />
      {data &&
        <>
          <div className={_styles.logo}>
            <StarWarsLogo />
          </div>
          <div className={_styles.wrapper}>
            {data.results.map((each, index) =>
              <Movie key={index} movie={each} />
            )}
          </div>
        </>
      }
    </div>
  );
}
