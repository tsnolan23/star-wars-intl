import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";

import "./index.css";
import messages from "./messages";
import { locale } from "./constants";
import { flattenMessages } from "./utils/flatten-messages";

import App from "./components/App";

addLocaleData([...en, ...es, ...fr]);

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://swapi.apis.guru" }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <App />
    </IntlProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
