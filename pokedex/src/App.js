import { GlobalStyle } from "./GlobalStyle";
import GlobalState from "./contexts/GlobalState";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
