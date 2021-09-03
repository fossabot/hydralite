import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <ThemeProvider storageKey="hlTheme" attribute="class">
    <div>
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
);

export default App;
