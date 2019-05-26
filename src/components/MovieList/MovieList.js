import React from "react";
import { FormattedMessage } from "react-intl";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import "./style.css";
import Container from "../Container";
import MovieCard from "../MovieCard";

const GET_MOVIES = gql`
  {
    allFilms {
      films {
        episodeID
        title
        director
        created
        edited
      }
    }
  }
`;

const MovieList = () => (
  <div className="MovieList">
    <Container>
      <h1 className="MovieList__Title">
        <FormattedMessage id="movieList.title" />
      </h1>
      <Query query={GET_MOVIES}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className="MovieList__Movies">
              {data.allFilms.films.map(film => (
                <MovieCard key={film.title} movie={film} />
              ))}
            </div>
          );
        }}
      </Query>
    </Container>
  </div>
);

export default MovieList;
