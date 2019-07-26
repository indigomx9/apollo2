import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_ROCKET_INVENTORY = gql`
    query getRocketInventory {
        rocketInventory {
            id
            model
            year
            stock
        }
    }
`;

export interface RocketInventory {
    id: number;
    model: string;
    year: number;
    stock: number;
};

export const RocketInventoryList = () => {
    const { data } = useQuery(GET_ROCKET_INVENTORY);

    return (
        <React.Fragment>
            <h1 className="banner">Inven</h1>
            <ul>
                {data.rocketInventory.map((inventory: RocketInventory) => (
                    <li key={inventory.id}>{inventory.model} {inventory.year}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

