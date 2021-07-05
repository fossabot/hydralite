import { GraphQLSchema } from "graphql";
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from "graphql-query-complexity";

export const apolloPlugins = (): any => [
  {
    requestDidStart: (schema: GraphQLSchema) => ({
      didResolveOperation({ request, document }: any) {
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

          throw new Error(
            `Maximum query complexity of ${maximumQueryComplexity} has been reached.`
          );
        }
      },
    }),
  },
];
