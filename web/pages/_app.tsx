import { ThemeContextProvider } from "~/hoc/theme/ThemeContext";
import { AuthContextProvider } from "~/util/auth";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
