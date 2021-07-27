import {
  ThemeContextProvider,
} from "~/hoc/theme/ThemeContext";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
