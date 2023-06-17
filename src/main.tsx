import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import en from "./i18n/en.json";
import { IntlProvider } from "react-intl";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={en}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </IntlProvider>
  </React.StrictMode>
);
