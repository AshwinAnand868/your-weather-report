import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
    const client = new ApolloClient({
        uri: process.env.API_URL,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apikey: ${process.env.STEPZEN_API_KEY}`,
        }
    });

    return client;
}