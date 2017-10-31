const graphqlRequestDeprecatedMessage = `\`graphqlRequest\` has been deprecated.
You should use Apollo: \`client.query({ query, variables...})\` or \`client.mutate()\`
Don't forget to enclose your query to gql\`…\` tag or import *.graphql file.
See docs at http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\\.query`;

interface IOptions {
  skipCache?: boolean;
}

function createGraphqlRequest(apolloClient) {
  return async function graphqlRequest(queryOrString, variables, options: IOptions = {}) {
    if (__DEV__) {
      console.error(graphqlRequestDeprecatedMessage);
    }

    const { skipCache } = options;
    let query = queryOrString;
    if (typeof queryOrString === 'string') {
      const gql = await (require as any).ensure(
        ['graphql-tag'],
        (require) => require('graphql-tag'),
        'graphql-tag',
      );
      query = gql([queryOrString]);
    }

    if (skipCache) {
      return apolloClient.networkInterface.query({ query, variables });
    }

    let isMutation = false;
    if (query.definitions) {
      isMutation = query.definitions.some((definition) =>
        (definition && (definition.operation === 'mutation')));
    }
    if (isMutation) {
      return apolloClient.mutate({ mutation: query, variables });
    }
    return apolloClient.query({ query, variables });
  };
}

export default function createHelpers({ apolloClient, fetch, history }) {
  return {
    client: apolloClient,
    history,
    fetch,
    // @deprecated('Use `client` instead')
    apolloClient,
    // @deprecated('Use `client.query()` or `client.mutate()` instead')
    graphqlRequest: createGraphqlRequest(fetch),
  };
}
