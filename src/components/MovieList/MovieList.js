import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { addLocaleData, IntlProvider } from "react-intl";

import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";

import messages from "../../messages";
import { locale as defaultLocale } from "../../constants";
import { flattenMessages } from "../../utils/flatten-messages";
import "./style.css";
import Container from "../Container";
import MovieCard from "../MovieCard";

addLocaleData([...en, ...es, ...fr]);

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

const MovieList = () => {
  const [locale, setLocale] = useState(defaultLocale);
  return (
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <div className="MovieList">
        <Container>
          <div className="MovieList__Header">
            <h1 className="MovieList__Title">
              <FormattedMessage id="movieList.title" />
            </h1>
            <select onChange={e => setLocale(e.target.value)}>
              <option value="en-US">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
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
    </IntlProvider>
  );
};

export default MovieList;
