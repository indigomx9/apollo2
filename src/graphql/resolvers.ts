import { rocketInventoryData } from "../models/rocketData";
import { PubSub } from "graphql-subscriptions";

let counter = rocketInventoryData.length;
const pubsub = new PubSub();
const LATEST_NEWS = 'LATEST_NEWS';

export const resolvers = {
    Query: {
        rocketInventory() {
            return rocketInventoryData;
        }
    },

    Mutation: {
        saveRocket(obj, { rocket }) {
            if (rocket) {
                counter += 1;
                const data = {
                    ...{ id: counter },
                    ...rocket
                };
                rocketInventoryData.push(data);
                return data;
            } else {
                throw new Error(`Couldn't save rocket - variables: ${rocket}`);
            }
        }
    },
};

