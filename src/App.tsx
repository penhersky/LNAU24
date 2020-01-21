import React from "react";
import {ApolloProvider} from "@apollo/react-hooks";
import {Switch, Route} from "react-router-dom";
import "./App.scss";

import {client} from "./client";

import {Auth, Home} from "./components";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Switch>
          <Route path="/api" component={Auth} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ApolloProvider>
  );
};

export default App;
