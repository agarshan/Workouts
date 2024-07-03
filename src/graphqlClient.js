import {GraphQLClient} from 'graphql-request'

const url =
  "https://publiceca74362b232d802.stepzen.net/api/hardy-ant/__graphql";

const client = new GraphQLClient(url);

export default client;