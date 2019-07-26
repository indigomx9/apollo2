import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: "http://localhost:9000/graphql"
});

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>, 
    document.getElementById("root"))
});


// import { getMainDefinition } from "apollo-utilities";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { ApolloLink, split } from "apollo-link";
// import { HttpLink } from "apollo-link-http";
// import { OperationDefinitionNode } from "graphql";

