import { ApolloError } from 'apollo-server-express';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from 'graphql-query-complexity';

export function apolloPlugins(schema: any) {
  return [
    {
      requestDidStart: () => ({
        didResolveOperation: ({ request, document }: any) => {
          const complexity = getComplexity({
            schema,
            operationName: request.operationName,
            query: document,
            variables: request.variables,
            estimators: [
              fieldExtensionsEstimator(),
              simpleEstimator({ defaultComplexity: 1 }),
            ],
          });

          const maximumQueryComplexity = 30;

          if (complexity > maximumQueryComplexity) {
            console.log(complexity);

            throw new ApolloError(
              `Maximum query complexity of ${maximumQueryComplexity} has been reached.`
            );
          }
        },
      }),
    },
  ];
}
