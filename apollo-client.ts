import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
    const client = new ApolloClient({
        uri: process.env.API_URL,
        cache: new InMemoryCache(),
    });

    return client;
}