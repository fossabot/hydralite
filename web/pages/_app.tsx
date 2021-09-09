import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AuthContextProvider } from "../utils/auth";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <AuthContextProvider>
    <ThemeProvider storageKey="hlTheme" attribute="class">
      <div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </AuthContextProvider>
);

export default App;
