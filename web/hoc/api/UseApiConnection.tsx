import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";
import { serverUrl } from "constantVars";
import React, { useEffect, useMemo, useState } from "react";

type V = ApolloClient<NormalizedCacheObject> | null;
export const UseApiConnectionContext = React.createContext<{
    conn: V;
    setConn: (u: V) => void;
}>({
    conn: null,
    setConn: () => {},
});

function getAuthToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return `Bearer ${accessToken}`;
    }
    return null;
}


const httpLink = new HttpLink({ uri: `${serverUrl}/graphql` });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: getAuthToken(),
    }
  }));

  return forward(operation);
})


export const UseApiConnection: React.FC = ({ children }) => {
    const [conn, setConn] = useState<V>(null);

    useEffect(() => {
        const client = new ApolloClient<NormalizedCacheObject>({
            cache: new InMemoryCache(),
            link: authMiddleware.concat(httpLink),
        });

        setConn(client);
    }, []);

    return (
        <UseApiConnectionContext.Provider
            value={useMemo(
                () => ({
                    conn,
                    setConn
                }),
                [conn]
            )}
        >
            {children}
        </UseApiConnectionContext.Provider>
    );
};