import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SnacksContextProvider } from "./context/snacksContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SnacksContextProvider>
      <App />
    </SnacksContextProvider>
  </StrictMode>
);
