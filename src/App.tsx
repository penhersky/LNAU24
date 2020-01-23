import React from "react";
import {ApolloProvider} from "@apollo/react-hooks";
import {Switch, Route} from "react-router-dom";
import "./App.scss";

import {client} from "./client";

import {Auth, Home, Page404} from "./components";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route path="/api" component={Auth} />
          <Route path="/" component={Home} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    </ApolloProvider>
  );
};

export default App;
