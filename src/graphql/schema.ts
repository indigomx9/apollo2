import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type RocketInventory {
        id: ID!
        model: String!
        year: Int!
        stock: Int!
    }

    input RocketInput {
        model: String!
        year: Int!
        stock: Int!
    }

    type Message {
        id: ID!
        content: String!
    }

    type Query {
        rocketInventory: [RocketInventory]
    }

    type Mutation {
        saveRocket(rocket: RocketInput!): RocketInventory
    }
`;

