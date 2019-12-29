import React from "react";
import {ApolloProvider} from "@apollo/react-hooks";
import {Button} from "antd";
import "antd/dist/antd.css";
import "./App.scss";

import {client} from "./client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </ApolloProvider>
  );
};

export default App;
