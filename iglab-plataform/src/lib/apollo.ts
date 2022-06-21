import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocwa0j1xfx01xi58hof0b3/master',
    cache: new InMemoryCache()
})