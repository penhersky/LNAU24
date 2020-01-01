import React from "react";
import {ApolloProvider} from "@apollo/react-hooks";
import "./App.scss";

import {client} from "./client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
    </ApolloProvider>
  );
};

export default App;
