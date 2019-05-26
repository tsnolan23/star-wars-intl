import React from "react";
import {
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  injectIntl
} from "react-intl";

import "./style.css";
import { MOVIE_GROSS } from "../../constants";

const MovieCard = ({ movie, intl }) => (
  <div className="MovieCard">
    <h3 className="MovieCard__Title">{movie.title}</h3>
    <ul>
      <li>
        <FormattedMessage
          id="movie.directedBy"
          values={{ director: movie.director }}
        />
      </li>
      <li>
        <FormattedMessage
          id="movie.gross"
          values={{
            amount: (
              <FormattedNumber
                value={MOVIE_GROSS[movie.episodeID]}
                style="currency"
                currencyDisplay="symbol"
                currency={intl.locale === "en-US" ? "USD" : "EUR"}
              />
            )
          }}
        />
      </li>
    </ul>
    <div className="MovieCard__Meta">
      <div className="MovieCard__Updated">
        <FormattedMessage id="movie.lastUpdated" />
        <FormattedRelative value={movie.edited} />
      </div>
      <div className="MovieCard__Created">
        <FormattedMessage id="movie.createdOn" />
        <FormattedDate value={movie.created} />
        <span> @ </span>
        <FormattedTime value={movie.created} />
      </div>
    </div>
  </div>
);

export default injectIntl(MovieCard);
